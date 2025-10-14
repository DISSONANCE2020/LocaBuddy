import React from "react";
import { View, Text } from "react-native";
import styles from "./TextField.styles";

interface TextFieldProps {
  label?: string;
  value?: string | number | null | undefined;
  placeholder?: string;
  numberOfLines?: number;
}

export default function TextField({
  label = "Label",
  value,
  placeholder = "—",
  numberOfLines = 1,
}: TextFieldProps) {
  const hasValue =
    value !== null && value !== undefined && String(value).length > 0;
  const display = hasValue ? String(value) : placeholder;

  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.textContainer}>
        <Text
          style={[styles.value, !hasValue && styles.placeholder]}
          numberOfLines={numberOfLines}
          ellipsizeMode='tail'
        >
          {display}
        </Text>
      </View>
    </View>
  );
}
