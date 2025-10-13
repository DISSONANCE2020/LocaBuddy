import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import BottomSheet from "../../components/LoginSignup/BottomSheet/BottomSheet";
import Background from "../../components/LoginSignup/Background/Background";
import { Section } from "../../components/LoginSignup/BottomSheet/types";
import styles from "./LoginSignup.styles";

export default function LoginSignupScreen() {
  const [section, setSection] = useState<Section>("login");

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={[styles.mapContainer, { flex: 1 }]}>
        <Background/>
        <BottomSheet
          section={section}
          visible={true}
          onChangeSection={setSection}
        />
      </View>
    </View>
  );
}
