import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./PlacesContent.styles";

const icons = {
  backArrow: require("../../../../../../assets/icons/ArrowBackIcon.png"),
};

interface PlacesContentProps {
  onBack?: () => void;
}

export default function PlacesContent({ onBack }: PlacesContentProps) {
  return (
    <View style={styles.content}>
      <Pressable
        onPress={onBack}
        hitSlop={10}
        accessibilityRole='button'
        accessibilityLabel='Go back'
      >
        <Image
          source={icons.backArrow}
          style={styles.arrow}
          resizeMode='contain'
        />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.text}>Places</Text>
      </View>
    </View>
  );
}
