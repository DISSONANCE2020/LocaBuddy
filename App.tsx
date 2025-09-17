import 'react-native-reanimated';
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
