import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomSheet from "../../components/LoginSignup/BottomSheet/BottomSheet";
import styles from "./LoginSignup.styles";

export default function LoginSignupScreen() {
  const [bottomVisible, setBottomVisible] = useState(true);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={[styles.mapContainer, { flex: 1 }]}>
        <BottomSheet
          visible={bottomVisible}
          onClose={() => setBottomVisible(false)}
          section={activeSection}
          isExpanded={false}
        />
      </View>
    </View>
  );
}
