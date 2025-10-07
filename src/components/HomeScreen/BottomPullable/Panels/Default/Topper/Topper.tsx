import React, { ReactNode } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import styles from "./Topper.styles";

export default function DefaultTopper() {
  return (
      <View style={styles.row}>
        <Image
          source={{
            uri: "https://www.vectorstock.com/royalty-free-vector/profile-placeholder-image-gray-silhouette-vector-21542863",
          }}
          style={styles.profileImage}
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
  );
}
