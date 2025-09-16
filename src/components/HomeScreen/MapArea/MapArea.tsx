import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import styles from './MapArea.styles';

export default function MapArea() {
  const initialRegion = {
    latitude: 14.676, // example latitude
    longitude: 121.0437, // example longitude
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.mapWrapper}>
      <MapView style={styles.map}
      initialRegion={initialRegion}/>
    </View>
  )
}
