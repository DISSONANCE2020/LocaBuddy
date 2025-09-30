import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./SheetTopper.styles";

export default function sheetTopper() {
  return (
    <LinearGradient
      colors={["#11998E", "#38EF7D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.sheetTopper}
    >
      <View style={styles.handle} />
      <View style={styles.sheetTopperContent}>
        <Image
          source={{
            uri: "https://www.vectorstock.com/royalty-free-vector/profile-placeholder-image-gray-silhouette-vector-21542863",
          }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.username}>Gab</Text>
          <View style={styles.locationDetails}>
            <Text style={styles.locationText}>
              At Sor Luisa St, Angeles, 2009 Pampanga
            </Text>
            <Text style={styles.locationText}>Since 2:30 PM</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
