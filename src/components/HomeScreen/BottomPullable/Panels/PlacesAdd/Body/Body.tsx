import React, { useState } from "react";
import { View, Text } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";
import { PlacesNear } from "../../../registry";
import styles from "./Body.styles";

interface PlacesBodyProps {
  section: Section;
  setSelected?: () => void;
  isExpanded: boolean;
}

export default function PlacesAddBody({}: PlacesBodyProps) {
  const VISIBLE_COUNT = 4;
  const visiblePlaces = PlacesNear.slice(0, VISIBLE_COUNT)


  return (
    <View>
      
      {/* ADD SEARCH BAR HERE */}

      <SheetRow
        label='Locate on Map'
        icon={icons.places}
        onPress={() => {
        }}
      />

      <View style={styles.subHeader}>
        <Text style={styles.label}>Near You</Text>
      </View>

      {visiblePlaces.map((p) => (
        <SheetRow
          key={p.id}
          label={p.name}
          icon={icons.building}
          onPress={() => {
            //Navigate to Place Details Screen
          }}
        />
      ))}
    </View>
  );
}
