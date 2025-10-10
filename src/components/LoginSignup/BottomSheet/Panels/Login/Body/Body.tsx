import React from "react";
import { View } from "react-native";
import { Section } from "../../../types";

interface DefaultBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function LoginBody({

}: DefaultBodyProps) {
  return (
    <View>
    </View>
  );
}
