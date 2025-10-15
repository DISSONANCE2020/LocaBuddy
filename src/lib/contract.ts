// lib/contract.ts
import { encodeFunctionData, decodeFunctionResult, type Hex } from "viem";
import { useWallet } from "./wallet";
import { LOCABUDDY_ABI } from "./abi/locabuddy";
import { Linking } from "react-native";

const CONTRACT_ADDRESS = (process.env.EXPO_PUBLIC_CONTRACT_ADDRESS ??
  process.env.CONTRACT_ADDRESS) as `0x${string}`;

export function useLocaBudContract() {
  const { client, session, account } = useWallet();

  const topic = session?.topic ?? null;
  const BASE_SEPOLIA_CHAIN_ID = "84532";
  const BASE_SEPOLIA_CHAIN_REF = `eip155:${BASE_SEPOLIA_CHAIN_ID}`;
  const chainId = BASE_SEPOLIA_CHAIN_REF;
  if (!CONTRACT_ADDRESS) {
    console.warn(
      "⚠️ Missing contract address in env (EXPO_PUBLIC_CONTRACT_ADDRESS or CONTRACT_ADDRESS)"
    );
  }

  async function ensure() {
    if (!client || !topic || !chainId || !account) {
      throw new Error("Wallet not connected or session incomplete");
    }
  }

  // --- 🔹 Transaction sending (triggers MetaMask confirmation)
  async function send(data: Hex, value: Hex = "0x0") {
    await ensure();

    const tx = {
      from: account as `0x${string}`,
      to: CONTRACT_ADDRESS,
      data,
      value,
    } as const;

    // --- Add this block to open MetaMask before sending the transaction
    try {
      const canOpenMM = await Linking.canOpenURL("metamask://");
      if (canOpenMM) {
        await Linking.openURL("metamask://");
      }
    } catch (e) {
      // Fallback: do nothing if MetaMask cannot be opened
    }

    try {
      const hash = await client!.request({
        topic: topic!,
        chainId: chainId!,
        request: {
          method: "eth_sendTransaction",
          params: [tx],
        },
      });

      return hash as string;
    } catch (err: any) {
      console.error("❌ send() failed:", err);
      throw err;
    }
  }

  // --- 🔹 For read-only contract calls
  async function call(data: Hex) {
    await ensure();
    const res = await client!.request({
      topic: topic!,
      chainId: chainId!,
      request: {
        method: "eth_call",
        params: [{ to: CONTRACT_ADDRESS, data }, "latest"],
      },
    });
    return res as Hex;
  }

  // --- 🔹 Smart contract functions
  async function registerUser(username: string) {
    const data = encodeFunctionData({
      abi: LOCABUDDY_ABI,
      functionName: "registerUser",
      args: [username],
    });

    // Trigger wallet confirmation
    return send(data);
  }

  async function updateProfile(metadataHash: Hex, maxBurn: bigint) {
    const data = encodeFunctionData({
      abi: LOCABUDDY_ABI,
      functionName: "updateProfile",
      args: [metadataHash, maxBurn],
    });
    return send(data);
  }

  async function profileUpdatePrice(): Promise<bigint> {
    const data = encodeFunctionData({
      abi: LOCABUDDY_ABI,
      functionName: "profileUpdatePrice",
      args: [],
    });

    const raw = await call(data);
    const decoded = decodeFunctionResult({
      abi: LOCABUDDY_ABI,
      functionName: "profileUpdatePrice",
      data: raw,
    });

    return decoded as unknown as bigint;
  }

  // --- 🔹 Poll for transaction confirmation
  async function waitForReceipt(hash: string, timeoutMs = 60000) {
    await ensure();
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
      const receipt = await client!.request({
        topic: topic!,
        chainId: chainId!,
        request: {
          method: "eth_getTransactionReceipt",
          params: [hash],
        },
      });

      if (receipt) {
        return receipt as any;
      }

      await new Promise((r) => setTimeout(r, 1500));
    }

    throw new Error("Transaction receipt timeout");
  }

  // --- Debug info
  console.log("🔍 Wallet session info:", {
    CONTRACT_ADDRESS,
    account,
    chainId,
    hasClient: !!client,
    topic,
  });

  return {
    registerUser,
    updateProfile,
    profileUpdatePrice,
    waitForReceipt,
  };
}
