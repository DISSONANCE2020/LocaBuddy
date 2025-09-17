import React, { useRef, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import styles from "./BottomPullable.styles";


export default function BottomPullable() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handle}
    >
      <View style={styles.content}>
        <Text>Pull up</Text>
      </View>
    </BottomSheet>
  );
}
