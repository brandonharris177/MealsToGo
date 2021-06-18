import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantsContextProvider } from "./src/services/restaurants/Restaurants.context";
import { LocationContextProvider } from "./src/services/location/Location.context";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/components/navigation/Navigation";
import { theme } from "./src/infrastructure/theme";
import { Container } from "./App.styling";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </Container>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
