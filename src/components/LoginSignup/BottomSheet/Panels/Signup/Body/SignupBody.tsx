import React from "react";
import { View, Text, Pressable } from "react-native";
import { Section } from "../../../types";
import Button from "../../../Components/Button/Button";
import styles from "./SignupBody.styles";

interface SignupBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function SignupBody({section, setSelected}: SignupBodyProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          Connect your Metamask Wallet to register!
        </Text>
        <Button label={"CONNECT METAMASK WALLET"} />
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
