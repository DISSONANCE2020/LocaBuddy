import React, { useRef, useState, useEffect, useMemo } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styles from "./BottomPullable.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { useSheetState } from "./Hooks/useSheetState";
import { PANELS } from "./registry";

const { height } = Dimensions.get("window");
const COLLAPSED_HEIGHT = height * 0.36;
const EXPANDED_HEIGHT = height * 0.54;
const ACTIVE_PANEL_HEIGHT = height * 0.78;

interface BottomPullableProps {
  visible: boolean;
  onClose: () => void;
}

export default function BottomPullable({ visible }: BottomPullableProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(COLLAPSED_HEIGHT)).current;

  const { section, selectSection, goBack } = useSheetState();
  const { Topper: SelectedTopper, Body: SelectedBody } = PANELS[section];

  const sectionRef = useRef(section);
  const isExpandedRef = useRef(isExpanded);
  useEffect(() => { sectionRef.current = section; }, [section]);
  useEffect(() => { isExpandedRef.current = isExpanded; }, [isExpanded]);

  useEffect(() => {
    if (!visible) return;
    if (section === "default") {
      Animated.timing(animatedHeight, {
        toValue: isExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return;
    }
    Animated.timing(animatedHeight, {
      toValue: ACTIVE_PANEL_HEIGHT,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [section, isExpanded, visible]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_, g) =>
          sectionRef.current === "default" && Math.abs(g.dy) > 12,
        onPanResponderMove: (_, g) => {
          if (sectionRef.current !== "default") return;
          const start = isExpandedRef.current ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
          const next = Math.min(EXPANDED_HEIGHT, Math.max(COLLAPSED_HEIGHT, start - g.dy));
          animatedHeight.setValue(next);
        },
        onPanResponderRelease: (_, g) => {
          if (sectionRef.current !== "default") return;
          const shouldExpand = g.dy < -40;
          const toValue = shouldExpand ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
          setIsExpanded(shouldExpand);
          Animated.timing(animatedHeight, { toValue, duration: 200, useNativeDriver: false }).start();
        },
      }),
    []
  );

  return (
    <Animated.View
      style={[styles.sheet, { height: animatedHeight }]}
      {...panResponder.panHandlers}
    >
      <SheetTopper>
        <SelectedTopper onBack={goBack} />
      </SheetTopper>
      <SelectedBody
        selected={section}
        setSelected={selectSection}
        isExpanded={isExpanded}
      />
    </Animated.View>
  );
}
