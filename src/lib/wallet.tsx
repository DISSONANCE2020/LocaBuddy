import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from "react";
import SignClient from "@walletconnect/sign-client";
import type { SessionTypes } from "@walletconnect/types";
import { Linking, Platform } from "react-native";

interface WalletContextType {
  client: InstanceType<typeof SignClient> | null;
  connectWallet: () => Promise<string | null>;
  disconnectWallet: () => Promise<void>;
  account: string | null;
  session: SessionTypes.Struct | null;
  isReady: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [client, setClient] = useState<InstanceType<typeof SignClient> | null>(
    null
  );
  const [account, setAccount] = useState<string | null>(null);
  const [session, setSession] = useState<SessionTypes.Struct | null>(null);
  const [isReady, setIsReady] = useState(false);

  const initPromiseRef = useRef<Promise<InstanceType<typeof SignClient>> | null>(null);

  const WC_PROJECT_ID =
    process.env.EXPO_PUBLIC_WALLETCONNECT_PROJECT_ID ??
    process.env.WALLETCONNECT_PROJECT_ID ??
    "YOUR_PROJECT_ID";

  useEffect(() => {
    const init = async () => {
      if (initPromiseRef.current) return;
      initPromiseRef.current = SignClient.init({
        projectId: WC_PROJECT_ID,
        metadata: {
          name: "LocaBuddy",
          description: "LocaBuddy App",
          url: "https://example.com",
          icons: [],
        },
      });
      try {
        const signClient = await initPromiseRef.current;
        setClient(signClient);
        setIsReady(true);
      } catch (e) {
        console.warn("WalletConnect init failed:", e);
        setIsReady(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!client) return;
    const sessions = client.session.getAll();
    if (sessions.length) {
      const s = sessions[0];
      setSession(s);
      const acc = s.namespaces.eip155?.accounts?.[0]?.split(":")[2] ?? null;
      setAccount(acc);
    }
  }, [client]);

  useEffect(() => {
    if (!client) return;
    const onUpdate = (args: any) => {
      const namespaces = args?.params?.namespaces ?? {};
      const acc = namespaces.eip155?.accounts?.[0]?.split(":")[2] ?? null;
      setAccount(acc);
    };
    const onDelete = () => {
      setSession(null);
      setAccount(null);
    };
    client.on("session_update", onUpdate);
    client.on("session_delete", onDelete);
    return () => {
      client.off("session_update", onUpdate);
      client.off("session_delete", onDelete);
    };
  }, [client]);

  const connectWallet = async (): Promise<string | null> => {
    const readyClient =
      client ??
      (initPromiseRef.current ? await initPromiseRef.current : null);

    if (!readyClient) {
      console.warn("WalletConnect client not ready");
      return null;
    }

    if (!WC_PROJECT_ID || WC_PROJECT_ID === "YOUR_PROJECT_ID") {
      console.warn("Missing WalletConnect projectId");
      return null;
    }

    try {
      const CHAIN_ID = (process.env.EXPO_PUBLIC_EVM_CHAIN_ID ?? "84532").trim();
      const CHAIN_REF = `eip155:${CHAIN_ID}`;
      const { uri, approval } = await readyClient.connect({
        requiredNamespaces: {
          eip155: {
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData", "eth_call"],
            chains: [CHAIN_REF],
            events: ["chainChanged", "accountsChanged"],
          },
        },
      });

      if (uri) {
        const deepLink = `metamask://wc?uri=${encodeURIComponent(uri)}`;
        try {
          const canOpenMM = await Linking.canOpenURL("metamask://");
          if (canOpenMM) {
            await Linking.openURL(deepLink);
          } else {
            await Linking.openURL(uri);
          }
        } catch {
          await Linking.openURL(uri);
        }
      }

      const sessionData = await approval();
      setSession(sessionData);

      const walletAccount =
        sessionData.namespaces.eip155?.accounts?.[0]?.split(":")[2] ?? null;
      setAccount(walletAccount);

      return walletAccount ?? null;
    } catch (err) {
      console.log("Wallet connection failed:", err);
      return null;
    }
  };

  const disconnectWallet = async () => {
    if (session && client) {
      await client.disconnect({
        topic: session.topic,
        reason: { code: 6000, message: "User disconnected" },
      });
    }
    setSession(null);
    setAccount(null);
  };

  return (
    <WalletContext.Provider
      value={{ client, connectWallet, disconnectWallet, account, session, isReady }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within WalletProvider");
  return context;
};
