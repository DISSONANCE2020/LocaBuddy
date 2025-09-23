import React from "react";
import { Modal, TouchableWithoutFeedback, View, Text } from "react-native";
import styles from "./BottomPullable.styles";

interface BottomPullableProps {
  visible: boolean;
  onClose: () => void;
}

export default function BottomPullable({ visible, onClose }: BottomPullableProps) {
  console.log("BottomPullable rendered, visible:", visible);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >

      <View style={[styles.sheet, { height: 200 }]}>
        <View style={styles.handle} />
        <View style={styles.content}>
          <Text>Unfinished</Text>
        </View>
      </View>
    </Modal>
  );
}