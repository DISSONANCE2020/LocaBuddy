import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProfileHeader.styles";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/50" }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        {/* Will make dynamic */}
        <Text style={styles.username}>Gab</Text>
        <View style={styles.levelRow}>
          <Text style={styles.levelText}>LVL 10</Text>
          <View style={styles.expBarBackground}>
            <View style={styles.expBarFill}/>
          </View>
        </View>
      </View>
    </View>
  );
}
