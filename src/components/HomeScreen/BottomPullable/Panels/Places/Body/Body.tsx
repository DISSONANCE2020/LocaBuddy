import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./Body.styles";
import { icons } from "../../../icons"; 

interface PlacesBodyProps {
  onBack?: () => void;
}

export default function PlacesBody({ onBack }: PlacesBodyProps) {
  return (
    <View style={styles.content}>
      <Pressable
        onPress={onBack}
        hitSlop={10}
        accessibilityRole='button'
        accessibilityLabel='Go back'
      >
        <Image
          source={icons.back}
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
