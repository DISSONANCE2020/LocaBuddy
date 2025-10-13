import React, { useRef, useEffect, useMemo } from "react";
import { Dimensions, Animated } from "react-native";
import styles from "./BottomSheet.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { Panels } from "./registry";
import { Section } from "./types";

const { height } = Dimensions.get("window");
const SHEET_HEIGHT = height * 0.48;
const CREATE_ACCOUNT_HEIGHT = height * 0.84;

const TOPPER_DEFAULT_HEIGHT = 120;
const TOPPER_CREATE_ACCOUNT_HEIGHT = 280;

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
  const safeSection: Section = useMemo(
    () => (Panels[section] ? section : "login"),
    [section]
  );

  const { Topper, Body } = Panels[safeSection];

  const opacity = useRef(new Animated.Value(0)).current;
  const sheetHeight = useRef(new Animated.Value(SHEET_HEIGHT)).current;

  const topperHeight = useRef(
    new Animated.Value(TOPPER_DEFAULT_HEIGHT)
  ).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [visible, opacity]);

  useEffect(() => {
    const toValue =
      safeSection === "createAccount" ? CREATE_ACCOUNT_HEIGHT : SHEET_HEIGHT;
    Animated.timing(sheetHeight, {
      toValue,
      duration: 220,
      useNativeDriver: false,
    }).start();

    const topperTo =
      safeSection === "createAccount"
        ? TOPPER_CREATE_ACCOUNT_HEIGHT
        : TOPPER_DEFAULT_HEIGHT;
    Animated.timing(topperHeight, {
      toValue: topperTo,
      duration: 220,
      useNativeDriver: false,
    }).start();
  }, [safeSection, sheetHeight]);

  const setSection = (s: Section) => {
    if (s !== safeSection) onChangeSection?.(s);
  };

  return (
    <Animated.View style={[styles.sheet, { height: sheetHeight }]}>
      <SheetTopper height={topperHeight}>
        <Topper section={safeSection} setSelected={setSection} />
      </SheetTopper>
      <Body section={safeSection} setSelected={setSection} />
    </Animated.View>
  );
}
