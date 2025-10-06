import React from "react";
import { View } from "react-native";
import Mapbox from "@rnmapbox/maps";
import styles from "./MapArea.styles";

const CENTER_COORD: [number, number] = [121.0437, 14.676];

export default function MapArea() {
  return (
    <View style={styles.mapWrapper}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={Mapbox.StyleURL.Street}
        logoEnabled={false}
        compassEnabled={false}
        scaleBarEnabled={false}
      >
        <Mapbox.Camera
          zoomLevel={12}
          centerCoordinate={CENTER_COORD}
          animationMode="flyTo"
          animationDuration={800}
        />
      </Mapbox.MapView>
    </View>
  );
}
