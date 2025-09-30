import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SheetContent.styles";
import { LinearGradient } from "expo-linear-gradient";

interface SheetContentProps{
  label: string;
}

export default function sheetContent({ label }: SheetContentProps) {
  return (
    <View style={styles.sheetContent}>
      <View style={styles.rowContent}>
        <LinearGradient
          colors={["#11998E", "#38EF7D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.avatar}
        >
          <Image></Image>
        </LinearGradient>
        <View style={styles.info}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </View>
  );
}
