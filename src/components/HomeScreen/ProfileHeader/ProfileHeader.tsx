import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ProfileHeader.styles";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#11998E", "#38EF7D"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.content}
      >
        <Image
          source={{
            uri: "https://www.vectorstock.com/royalty-free-vector/profile-placeholder-image-gray-silhouette-vector-21542863",
          }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.username}>Gab</Text>
          <View style={styles.levelRow}>
            <Text style={styles.levelText}>LVL 10</Text>
            <View style={styles.expBarBackground}>
              <LinearGradient
                colors={["#FF7865", "#F4DC32"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.expBarFill}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
