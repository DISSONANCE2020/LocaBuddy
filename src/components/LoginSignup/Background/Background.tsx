import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Background.styles";

export default function Background() {
  return (
      <LinearGradient       colors={["#11998E", "#38EF7D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.background} />
  );
}