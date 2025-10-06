import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "./SheetContent.styles";
import { LinearGradient } from "expo-linear-gradient";

interface SheetContentProps{
  label: string;
  icon: ImageSourcePropType;
}

export default function sheetContent({ label, icon }: SheetContentProps) {
  return (
    <View style={styles.sheetContent}>
      <View style={styles.rowContent}>
        <LinearGradient
          colors={["#11998E", "#38EF7D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.avatar}
        >
          <Image source={icon} style={styles.avatarImage}/>
        </LinearGradient>
        <View style={styles.info}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </View>
  );
}
