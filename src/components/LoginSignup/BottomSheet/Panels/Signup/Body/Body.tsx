import React from "react";
import { View, Text } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";
import styles from "./Body.styles";

interface PlacesBodyProps {
  section: Section;
  setSelected?: () => void;
  isExpanded: boolean;
  setActivePanel?: (key: ActivePanelKey) => void;
}

export default function SignupBody({ setActivePanel }: PlacesBodyProps) {
  const VISIBLE_COUNT = 4;

  return (
    <View>
    </View>
  );
}
