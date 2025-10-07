import React from "react";
import { View } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";
import { Section } from "../../../types";

interface DefaultBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function DefaultBody({
  section,
  setSelected,
  isExpanded,
}: DefaultBodyProps) {
  return (
    <View>
      <SheetRow
        label='Places'
        icon={icons.places}
        selected={section === "places"}
        onPress={() => {
          setSelected("places");
        }}
      />
      <SheetRow
        label='Friends'
        icon={icons.friends}
        selected={section === "friends"}
        onPress={() => setSelected("friends")}
      />
      {isExpanded && (
        <>
          <SheetRow
            label='Wallet'
            icon={icons.wallet}
            selected={section === "wallet"}
            onPress={() => setSelected("wallet")}
          />
          <SheetRow
            label='Settings'
            icon={icons.settings}
            selected={section === "settings"}
            onPress={() => setSelected("settings")}
          />
        </>
      )}
    </View>
  );
}
