import React, { forwardRef } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";
import styles from "./InputField.styles";

interface InputFieldProps extends TextInputProps {
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      label = "Label",
      placeholder = "Placeholder",
      value,
      onChangeText,
      ...rest
    },
    ref
  ) => {
    return (
      <View style={styles.container}>
        {!!label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={"#cdcdcd"}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    );
  }
);
export default InputField;
