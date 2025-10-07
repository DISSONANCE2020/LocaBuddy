import React, { useState } from "react";
import { View, Text } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { Section } from "../../../types";
import { PLACES } from "../../../registry";
import styles from "./Body.styles";

interface PlacesBodyProps {
  section: Section;
  setSelected?: () => void;
  isExpanded: boolean;
}

export default function PlacesBody({}: PlacesBodyProps) {
  const VISIBLE_COUNT = 5;
  const visiblePlaces = PLACES.slice(0, VISIBLE_COUNT)


  return (
    <View>
      <SheetRow
        label='Add Place'
        icon={icons.add}
        onPress={() => {
          //Navigate to Add Place Screen
        }}
      />

      <View style={styles.subHeader}>
        <Text style={styles.label}>Your Places</Text>
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
