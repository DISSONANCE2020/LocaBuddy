import React from "react";
import { View, Text } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { ActivePanelKey, Section } from "../../../types";
import { PlacesUser } from "../../../registry";
import styles from "./PlacesBody.styles";

interface PlacesBodyProps {
  section: Section;
  setSelected?: () => void;
  isExpanded: boolean;
  setActivePanel?: (key: ActivePanelKey) => void;
}

export default function PlacesBody({ setActivePanel }: PlacesBodyProps) {
  const VISIBLE_COUNT = 4;
  const visiblePlaces = PlacesUser.slice(0, VISIBLE_COUNT);

  return (
    <View>
      <SheetRow
        label="Add Place"
        icon={icons.add}
        onPress={() => setActivePanel?.("placesAdd")}
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
