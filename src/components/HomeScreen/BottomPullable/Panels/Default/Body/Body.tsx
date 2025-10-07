import React from "react";
import { View } from "react-native";
import SheetRow from "../../../Components/SheetRow/SheetRow";
import { icons } from "../../../icons";

type Panel = "default" | "places" | "friends" | "wallet" | "settings";

interface DefaultBodyProps {
  selected: Panel;
  setSelected: (p: Panel) => void;
  isExpanded: boolean;
}

export default function DefaultBody({
  selected,
  setSelected,
  isExpanded,
}: DefaultBodyProps) {
  return (
    <View>
      <SheetRow
        label='Places'
        icon={icons.places}
        selected={selected === "places"}
        onPress={() => {
          setSelected("places");
        }}
      />
      <SheetRow
        label='Friends'
        icon={icons.friends}
        selected={selected === "friends"}
        onPress={() => setSelected("friends")}
      />
      {isExpanded && (
        <>
          <SheetRow
            label='Wallet'
            icon={icons.wallet}
            selected={selected === "wallet"}
            onPress={() => setSelected("wallet")}
          />
          <SheetRow
            label='Settings'
            icon={icons.settings}
            selected={selected === "settings"}
            onPress={() => setSelected("settings")}
          />
        </>
      )}
    </View>
  );
}
