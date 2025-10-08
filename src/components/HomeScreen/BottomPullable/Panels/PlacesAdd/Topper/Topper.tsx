import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./Topper.styles";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";

interface PlacesAddTopperProps {
  onBack?: () => void;
  setActivePanel?: (key: ActivePanelKey) => void;
  setSelected?: (s: Section) => void;
}

export default function PlacesAddTopper({
  onBack,
  setActivePanel,
  setSelected,
}: PlacesAddTopperProps) {
  return (
    <View style={styles.content}>
      <Pressable
        onPress={() => {
          setSelected?.("places");
          setActivePanel?.("places");
          onBack?.();
        }}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Image source={icons.back} style={styles.arrow} resizeMode="contain" />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.text}>Add a Place</Text>
      </View>
    </View>
  );
}
