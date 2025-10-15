import React, { useMemo, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./CreateAccountTopper.styles";
import { icons } from "../../../icons";
import { useWallet } from "../../../../../../lib/wallet";

export default function CreateAccountTopper() {
  const { account } = useWallet();
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

  // Use picked image if present, else deterministic static avatar by wallet
  const avatarUri = useMemo(() => {
    if (uri) return uri;
    if (!account) return null;
    return `https://api.dicebear.com/7.x/identicon/png?size=128&seed=${encodeURIComponent(account)}`;
  }, [uri, account]);

  return (
    <View style={styles.content}>
      <Pressable
        onPress={pickImage}
        accessibilityRole='button'
        accessibilityLabel='Upload profile photo'
        style={styles.avatarWrapper}
        android_ripple={{ color: "rgba(0,0,0,0.06)", borderless: true }}
      >
        {avatarUri ? (
          <Image
            source={{ uri: avatarUri }}
            style={styles.fallbackImage}
          />
        ) : (
          <Image source={icons.add} style={styles.addIcon} />
        )}
      </Pressable>
      <Text style={styles.text}>CREATE YOUR ACCOUNT</Text>
    </View>
  );
}