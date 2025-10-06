import React from "react";
import Mapbox from "@rnmapbox/maps";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
// import BottomPullable from "./src/components/HomeScreen/BottomPullable/BottomPullable";

Mapbox.setAccessToken("pk.eyJ1IjoiZ2FiLWNyeiIsImEiOiJjbWc5MWdjeHUwNmQ4MmxxdGRyN241NGRlIn0.oKdv-9dfjqOJsRzK2M_OLQ");

export default function App() {
  return (
      <HomeScreen />
  );
}
