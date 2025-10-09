import React, { useRef, useState, useEffect, useMemo } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styles from "./BottomSheet.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { useSheetState } from "./Hooks/useSheetState";
import { Panels } from "./registry";
import { ActivePanelKey, Section } from "./types";

const { height } = Dimensions.get("window");

const SHEET_HEIGHT = height * 0.66;

interface BottomSheetProps {
  section: Section;
  visible: boolean;
  onChangeSection?: (s: Section) => void;
}

export default function BottomSheet({
  section,
  visible = true,
  onChangeSection,
}: BottomSheetProps) {
  if (!Panels[section]) {
    section = "login";
  }

  const { Topper, Body } = Panels[section];

  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [visible, opacity]);

  const setSection = (s: Section) => {
    if (s !== section) onChangeSection?.(s);
  };

  return (
    <Animated.View
      style={[styles.sheet, { height: SHEET_HEIGHT }, { opacity }]}
    >
      <SheetTopper>
        <Topper section={section} setSelected={setSection} />
      </SheetTopper>
      <Body section={section} setSelected={setSection} />
    </Animated.View>
  );
}
