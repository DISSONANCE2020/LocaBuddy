import React from "react";
import { View, Text, Pressable } from "react-native";
import { Section } from "../../../types";
import Button from "../../../Components/Button/Button";
import styles from "./LoginBody.styles";

interface LoginBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function LoginBody({ section, setSelected }: LoginBodyProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          Connect your Metamask Wallet to log in!
        </Text>
        <Button label={"CONNECT METAMASK WALLET"} />
      </View>
      <View style={styles.bottomRowContainer}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <Pressable onPress={() => setSelected("signup")}>
            <Text
              style={[styles.linkText, { textDecorationLine: "underline" }]}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
