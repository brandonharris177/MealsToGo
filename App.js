import React from "react";
import { Text, View } from "react-native";
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

  const Tab = createBottomTabNavigator();

  const Map = () => {
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  };

  const Settings = () => {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Restauants" component={RestauantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </Container>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
