import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Restauants") {
                    iconName = focused ? "restaurant" : "restaurant-outline";
                  } else if (route.name === "Map") {
                    iconName = focused ? "navigate" : "navigate-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
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
