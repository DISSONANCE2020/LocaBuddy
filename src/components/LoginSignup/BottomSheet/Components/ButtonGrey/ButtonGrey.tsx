import React from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ButtonGrey.styles";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.sheetContent,
        pressed && { opacity: 0.95 },
      ]}
    >
      <View style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
}
