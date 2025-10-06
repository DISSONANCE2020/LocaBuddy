import React, { useRef, useState, useEffect } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styles from "./BottomPullable.styles";
import SheetTopper from "../../ReusableComponents/SheetTopper/SheetTopper";
import PlacesContent from "../../ReusableComponents/SheetTopper/Content/Places/PlacesContent";
import DefaultContent from "../../ReusableComponents/SheetTopper/Content/Default/DefaultContent";
import SheetRow from "../../ReusableComponents/SheetRow/SheetRow";

const { height } = Dimensions.get("window");
const COLLAPSED_HEIGHT = height * 0.36;
const EXPANDED_HEIGHT = height * 0.54;

interface BottomPullableProps {
  visible: boolean;
  onClose: () => void;
}

// Each sheet content item with icon and label (NEW)

type Panel = "default" | "places" | "friends" | "wallet" | "settings";

const icons = {
  places: require("../../../../assets/icons/PlaceIcon.png"),
  friends: require("../../../../assets/icons/FriendsIcon.png"),
  wallet: require("../../../../assets/icons/WalletIcon.png"),
  settings: require("../../../../assets/icons/SettingsIcon.png"),
};

export default function BottomPullable({
  visible,
  onClose,
}: BottomPullableProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState<Panel>("default");
  const animatedHeight = useRef(new Animated.Value(COLLAPSED_HEIGHT)).current;

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
        {selected === "places" ? (
          <PlacesContent onBack={() => setSelected("default")} />
        ) : (
          <DefaultContent />
        )}
      </SheetTopper>
      <SheetRow
        label='Places'
        icon={icons.places}
        selected={selected === "places"}
        onPress={() => {
          setSelected("places");
        }}
      />
      <SheetRow
        label='Friends'
        icon={icons.friends}
        selected={selected === "friends"}
        onPress={() => setSelected("friends")}
      />
      {isExpanded && (
        <>
          <SheetRow
            label='Wallet'
            icon={icons.wallet}
            selected={selected === "wallet"}
            onPress={() => setSelected("wallet")}
          />
          <SheetRow
            label='Settings'
            icon={icons.settings}
            selected={selected === "settings"}
            onPress={() => setSelected("settings")}
          />
        </>
      )}
    </Animated.View>
  );
}
