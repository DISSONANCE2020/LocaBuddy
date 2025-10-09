import React from "react";
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import styles from "./SearchBar.styles";
import { LinearGradient } from "expo-linear-gradient";

interface SheetRowProps {
  icon: ImageSourcePropType;
}

export default function SheetRow({ icon }: SheetRowProps) {
  return (
    <View style={styles.search}>
      <View style={styles.icon}>
        <Image source={icon} style={styles.iconImage} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search Places"
          placeholderTextColor={"#CDCDCD"}
          style={styles.input}
        />
      </View>
    </View>
  );
}
