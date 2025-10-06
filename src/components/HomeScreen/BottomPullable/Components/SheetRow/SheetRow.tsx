import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import styles from "./SheetRow.styles";
import { LinearGradient } from "expo-linear-gradient";

interface SheetRowProps {
  label: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
  selected?: boolean;
}

export default function SheetRow({
  label,
  icon,
  onPress,
  selected
}: SheetRowProps) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "rgba(0,0,0,0.08)" }}
      style={({ pressed }) => [
        styles.sheetContent,
        pressed && { opacity: 0.95 },
      ]}
      accessibilityRole='button'
      accessibilityLabel={label}
    >
      <View style={styles.rowContent}>
        <LinearGradient
          colors={["#11998E", "#38EF7D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.icon}
        >
          <Image source={icon} style={styles.iconImage} />
        </LinearGradient>
        <View style={styles.info}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
}
