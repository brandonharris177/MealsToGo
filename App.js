import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestauantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";

export default function App() {
  return (
    <>
      <RestauantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
