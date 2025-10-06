import React, { ReactNode } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./SheetTopper.styles";

export default function SheetTopper({ children }: { children?: ReactNode }) {
  return (
    <LinearGradient
      colors={["#11998E", "#38EF7D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.sheetTopper}
    >
      <View style={styles.handle} />
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
}