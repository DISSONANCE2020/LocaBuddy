import React from "react";
import { View, Text, Image } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { Section } from "../../../types";
import { PlacesNear } from "../../../registry";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import SheetSpace from "../../../Components/SheetSpace/SheetSpace";
import styles from "./Body.styles";

interface PlacesBodyProps {
  section: Section;
  setSelected?: () => void;
  isExpanded: boolean;
}

export default function PlacesAddBody({}: PlacesBodyProps) {
  const VISIBLE_COUNT = 3;
  const visiblePlaces = PlacesNear.slice(0, VISIBLE_COUNT);

  return (
    <View>
      <SearchBar icon={icons.placesGreen} />
      <SheetRow label="Locate on Map" icon={icons.places} onPress={() => {}} />

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
