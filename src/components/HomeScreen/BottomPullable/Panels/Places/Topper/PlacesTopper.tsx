import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./PlacesTopper.styles";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";

interface PlacesTopperProps {
  onBack?: () => void;
  setActivePanel?: (key: ActivePanelKey) => void;
  setSelected?: (s: Section) => void;
}

export default function PlacesTopper({
  onBack,
  setActivePanel,
  setSelected,
}: PlacesTopperProps) {
  return (
    <View style={styles.content}>
      <Pressable
        onPress={() => {
          setSelected?.("default");
          setActivePanel?.("default");
          onBack?.();
        }}
      >
        <Image source={icons.back} style={styles.arrow} resizeMode="contain" />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.text}>Places</Text>
      </View>
    </View>
  );
}
