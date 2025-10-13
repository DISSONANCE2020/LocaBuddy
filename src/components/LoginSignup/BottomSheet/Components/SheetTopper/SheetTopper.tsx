import React, { ReactNode } from "react";
import { Animated } from "react-native";
import styles from "./SheetTopper.styles";

interface Props {
  children?: ReactNode;
  height?: number | Animated.Value;
}

export default function SheetTopper({ children, height }: Props) {
  return (
    <Animated.View
      style={[styles.sheetTopper, height != null ? { height } : null]}
    >
      <Animated.View style={styles.content}>{children}</Animated.View>
    </Animated.View>
  );
}
