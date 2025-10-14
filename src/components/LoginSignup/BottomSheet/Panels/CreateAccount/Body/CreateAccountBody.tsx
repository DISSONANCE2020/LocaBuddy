import React from "react";
import { View, Text, Pressable } from "react-native";
import Button from "../../../Components/Button/Button";
import ButtonGrey from "../../../Components/ButtonGrey/ButtonGrey";
import SheetSpace from "../../../Components/SheetSpace/SheetSpace";
import InputField from "../../../Components/InputField/InputField";
import TextField from "../../../Components/TextField/TextField";
import { Section } from "../../../types";
import styles from "./CreateAccountBody.styles";
import { useWallet } from "../../../../../../lib/wallet";

interface DefaultBodyProps {
  section: Section;
  setSelected: (p: Section) => void;
  isExpanded: boolean;
}

export default function CreateAccountTopper({
  section,
  setSelected,
  isExpanded,
}: DefaultBodyProps) {
  const { account } = useWallet();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextField
          label='Your Metamask Wallet Address'
          placeholder='Not connected'
          value={account ?? ""}
          numberOfLines={1}
        />
        <InputField label='Username' placeholder='Username' />
        <SheetSpace />
        <Button
          label={"CREATE YOUR ACCOUNT"}
          onPress={() => setSelected("createAccount")}
          // disabled={!account} // optional
        />
        <ButtonGrey label={"CANCEL"} onPress={() => setSelected("login")} />
      </View>
    </View>
  );
}
