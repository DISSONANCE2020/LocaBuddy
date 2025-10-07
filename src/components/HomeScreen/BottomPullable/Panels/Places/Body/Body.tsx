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
  return (
    <View>
      <SheetRow
        label='Add Place'
        icon={icons.add}
        onPress={() => {
          //Navigate to Add Place Screen
        }}
      />

      <View style={styles.info}>
        <Text style={styles.label}>Your Places</Text>
      </View>

      {PLACES.map((p) => (
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
