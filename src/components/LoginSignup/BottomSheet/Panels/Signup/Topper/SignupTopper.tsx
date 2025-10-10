import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./SignupTopper.styles";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";

interface PlacesTopperProps {
  onBack?: () => void;
  setActivePanel?: (key: ActivePanelKey) => void;
  setSelected?: (s: Section) => void;
}

export default function SignupTopper({
  onBack,
  setActivePanel,
  setSelected,
}: PlacesTopperProps) {
  return (
    <View>
    </View>
  );
}
