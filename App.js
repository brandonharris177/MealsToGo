import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestauantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";
import { theme } from "./src/infrastructure/theme";

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

  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restauants" component={RestauantsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <MyTabs />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
