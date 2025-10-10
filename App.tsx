import React from "react";
import Mapbox from "@rnmapbox/maps";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginSignup from "./src/screens/LoginSignup/LoginSignup";

Mapbox.setAccessToken("pk.eyJ1IjoiZ2FiLWNyeiIsImEiOiJjbWc5MWdjeHUwNmQ4MmxxdGRyN241NGRlIn0.oKdv-9dfjqOJsRzK2M_OLQ");

export default function App() {
  return (
      <LoginSignup />
  );
}
