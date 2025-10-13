import React, { useRef, useEffect, useMemo, useState } from "react";
import { Dimensions, Animated, Keyboard, Platform } from "react-native";
import styles from "./BottomSheet.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { Panels } from "./registry";
import { Section } from "./types";

const { height } = Dimensions.get("window");
const SHEET_HEIGHT = height * 0.48;
const CREATE_ACCOUNT_HEIGHT = height * 0.84;
const KEYBOARD_ACTIVE_HEIGHT = height;

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

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const showSub = Keyboard.addListener(showEvent, () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(hideEvent, () =>
      setKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  useEffect(() => {
    const isCreate = safeSection === "createAccount";
    const toValue =
      isCreate && keyboardVisible
        ? KEYBOARD_ACTIVE_HEIGHT
        : isCreate
        ? CREATE_ACCOUNT_HEIGHT
        : SHEET_HEIGHT;

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
  }, [safeSection, keyboardVisible]);

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
