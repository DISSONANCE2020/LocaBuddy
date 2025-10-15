import React, { useEffect, useMemo, useState } from "react";
import { View, Alert } from "react-native";
import Button from "../../../Components/Button/Button";
import ButtonGrey from "../../../Components/ButtonGrey/ButtonGrey";
import SheetSpace from "../../../Components/SheetSpace/SheetSpace";
import InputField from "../../../Components/InputField/InputField";
import TextField from "../../../Components/TextField/TextField";
import { Section } from "../../../types";
import styles from "./CreateAccountBody.styles";
import { useWallet } from "../../../../../../lib/wallet";
import { useLocaBudContract } from "../../../../../../lib/contract";
import { keccak256, stringToBytes } from "viem";

interface DefaultBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function CreateAccountBody({
  section,
  setSelected,
  isExpanded,
}: DefaultBodyProps) {
  const { account } = useWallet();
  const { registerUser, updateProfile, profileUpdatePrice, waitForReceipt } =
    useLocaBudContract();

  const [username, setUsername] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const staticAvatar = useMemo(() => {
    const seed = account ?? "locabuddy";
    return `https://api.dicebear.com/7.x/identicon/png?size=128&seed=${encodeURIComponent(
      seed
    )}`;
  }, [account]);

  useEffect(() => {
    setImageUri(staticAvatar);
  }, [staticAvatar]);

  const handleCreate = async () => {
    if (!account) {
      Alert.alert("Connect Wallet", "Please connect your wallet first.");
      return;
    }

    const uname = username
      .trim()
      .normalize("NFKC")
      .replace(/[\u200B-\u200D\uFEFF]/g, "");

    if (uname.length < 3 || uname.length > 32 || /[^A-Za-z0-9]/.test(uname)) {
      Alert.alert(
        "Invalid username",
        "Username must be 3–32 characters, letters and numbers only."
      );
      return;
    }

    if (!imageUri) {
      Alert.alert("Missing photo", "Profile photo not available.");
      return;
    }

    try {
      setSubmitting(true);

      const usernameHash = keccak256(stringToBytes(uname));
      const metadata = {
        usernameHash,
        image: imageUri,
        address: account,
        updatedAt: Date.now(),
      };
      const json = JSON.stringify(metadata);
      const metadataHash = keccak256(stringToBytes(json));

      let tx1;
      try {
        tx1 = await registerUser(uname);
      } catch (err) {
        const raw = err as any;
        console.error("registerUser error (raw):", raw);

        if (raw?.message?.includes("timeout")) {
          Alert.alert(
            "Wallet Timeout",
            "Your wallet did not respond. Please open your wallet app and approve the transaction, then try again."
          );
        } else if (raw?.message?.includes("Missing CONTRACT_ADDRESS")) {
          Alert.alert(
            "Configuration Error",
            "No contract address found. Check your .env for EXPO_PUBLIC_CONTRACT_ADDRESS or CONTRACT_ADDRESS."
          );
        } else if (raw?.message?.includes("Wallet not connected")) {
          Alert.alert("Connect Wallet", "Please reconnect your wallet.");
        } else {
          const message =
            raw?.message ||
            (typeof raw === "string" ? raw : JSON.stringify(raw)) ||
            "registerUser failed";
          Alert.alert("Error", message);
        }

        setSubmitting(false);
        return;
      }

      Alert.alert("Success", "Account created successfully!");
      setSelected("login");
    } catch (e: any) {
      console.warn("handleCreate outer error:", e);
      Alert.alert("Error", e?.message ?? "Failed to create account");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextField
          label="Your Metamask Wallet Address"
          placeholder="Not connected"
          value={account ?? ""}
          numberOfLines={1}
        />
        <InputField
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <SheetSpace />
        <Button
          label={submitting ? "CREATING..." : "CREATE YOUR ACCOUNT"}
          onPress={handleCreate}
          disabled={!account || submitting}
        />
        <ButtonGrey label={"CANCEL"} onPress={() => setSelected("login")} />
      </View>
    </View>
  );
}