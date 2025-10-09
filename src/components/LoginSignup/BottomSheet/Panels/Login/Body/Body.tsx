import React from "react";
import { View } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { Section } from "../../../types";

interface DefaultBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function LoginBody({
  section,
  setSelected,
  isExpanded,
}: DefaultBodyProps) {
  return (
    <View>
    </View>
  );
}
