import React, { useState } from "react";
import { View, Text, Image, Pressable, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./CreateAccountTopper.styles";
import { icons } from "../../../icons";

export default function CreateAccountTopper() {
  const [uri, setUri] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true,
      aspect: [1, 1],
      selectionLimit: 1,
    });

    if (!res.canceled) {
      setUri(res.assets[0]?.uri ?? null);
    }
  };

  return (
    <View style={styles.content}>
      <Pressable
        onPress={pickImage}
        accessibilityRole='button'
        accessibilityLabel='Upload profile photo'
        style={styles.avatarWrapper}
        android_ripple={{ color: "rgba(0,0,0,0.06)", borderless: true }}
      >
        <Image source={icons.add} style={styles.addIcon} />
      </Pressable>
      <Text style={styles.text}>CREATE YOUR ACCOUNT</Text>
    </View>
  );
}
