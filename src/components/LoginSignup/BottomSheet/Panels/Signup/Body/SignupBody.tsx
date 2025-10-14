import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Section } from "../../../types";
import Button from "../../../Components/Button/Button";
import styles from "./SignupBody.styles";

import { useWallet } from "../../../../../../lib/wallet";

interface SignupBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function SignupBody({ section, setSelected }: SignupBodyProps) {
  const { connectWallet, account, isReady } = useWallet();

  const handleConnectWallet = async () => {
    const approved = await new Promise<boolean>((resolve) => {
      Alert.alert(
        "Connect wallet",
        "Would you like to connect your MetaMask wallet to LocaBuddy?",
        [
          { text: "Cancel", style: "cancel", onPress: () => resolve(false) },
          { text: "Connect", onPress: () => resolve(true) },
        ]
      );
    });
    if (!approved) return;

    const addr = await connectWallet();
    if (addr) {
      setSelected("createAccount");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          Connect your Metamask Wallet to register!
        </Text>
        <Button
          label={"CONNECT METAMASK WALLET"}
          onPress={handleConnectWallet}
          disabled={!isReady || !!account}
        />
      </View>
      <View style={styles.bottomRowContainer}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Already have an account? </Text>
          <Pressable onPress={() => setSelected("login")}>
            <Text
              style={[styles.linkText, { textDecorationLine: "underline" }]}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
