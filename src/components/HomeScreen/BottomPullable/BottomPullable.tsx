import React, { useRef, useState, useEffect } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styles from "./BottomPullable.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { useSheetState } from "./Hooks/useSheetState";
import { PANELS } from "./registry";

const { height } = Dimensions.get("window");
const COLLAPSED_HEIGHT = height * 0.36;
const EXPANDED_HEIGHT = height * 0.54;

interface BottomPullableProps {
  visible: boolean;
  onClose: () => void;
}

export default function BottomPullable({ visible }: BottomPullableProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(COLLAPSED_HEIGHT)).current;

  const { section, selectSection, goBack } = useSheetState();
  const { Topper: SelectedTopper, Body: SelectedBody } = PANELS[section];

  useEffect(() => {
    if (visible) {
      Animated.timing(animatedHeight, {
        toValue: COLLAPSED_HEIGHT,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dy) > 12,

      onPanResponderMove: (_, gesture) => {
        if (gesture.dy < 0) {
          const newHeight = COLLAPSED_HEIGHT + Math.abs(gesture.dy);
          if (newHeight <= EXPANDED_HEIGHT) {
            animatedHeight.setValue(newHeight);
          }
        } else if (gesture.dy > 0) {
          const currentHeight = isExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
          const newHeight = currentHeight - gesture.dy;
          if (newHeight >= COLLAPSED_HEIGHT) {
            animatedHeight.setValue(newHeight);
          }
        }
      },

      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -50) {
          setIsExpanded(true);
          Animated.timing(animatedHeight, {
            toValue: EXPANDED_HEIGHT,
            duration: 200,
            useNativeDriver: false,
          }).start();
        } else if (gesture.dy > 50) {
          setIsExpanded(false);
          Animated.timing(animatedHeight, {
            toValue: COLLAPSED_HEIGHT,
            duration: 200,
            useNativeDriver: false,
          }).start();
        } else {
          const targetHeight = isExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
          Animated.timing(animatedHeight, {
            toValue: targetHeight,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  if (!visible) return null;

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
