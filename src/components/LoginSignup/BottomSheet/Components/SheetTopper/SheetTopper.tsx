import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./SheetTopper.styles";

export default function SheetTopper({ children }: { children?: ReactNode }) {
  return (
    <View
      style={styles.sheetTopper}
    >
      <View style={styles.content}>{children}</View>
    </View>
  );
}
