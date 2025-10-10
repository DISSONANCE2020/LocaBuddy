import React from "react";
import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Button.styles";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.sheetContent,
        pressed && { opacity: 0.95 },
      ]}
    >
      <LinearGradient
        colors={["#11998E", "#38EF7D"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
