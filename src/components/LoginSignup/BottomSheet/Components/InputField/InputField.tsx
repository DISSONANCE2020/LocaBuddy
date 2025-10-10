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
  ({ label = "Label", placeholder = "Placeholder" }, ref) => {
    return (
      <View>
        {!!label && <Text>{label}</Text>}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={"#cdcdcd"}
          style={styles.input}
        />
      </View>
    );
  }
);

export default InputField;
