import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import ProfileHeader from "../../components/HomeScreen/ProfileHeader/ProfileHeader";
import MapArea from "../../components/HomeScreen/MapArea/MapArea";
import BottomPullable from "../../components/HomeScreen/BottomPullable/BottomPullable";
import { Section } from "../../components/HomeScreen/BottomPullable/types";
import styles from "./HomeScreen.styles";

export default function HomeScreen() {
  const [bottomVisible, setBottomVisible] = useState(true);
  const [section, setSection] = useState<Section>("default");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <StatusBar barStyle="dark-content" />
      <ProfileHeader />
      <View style={[styles.mapContainer, { flex: 1 }]}>
        <MapArea />
        <BottomPullable
          section={section}
          isExpanded={isExpanded}
          visible={bottomVisible}
          onClose={() => setBottomVisible(false)}
        />
      </View>
    </View>
  );
}
