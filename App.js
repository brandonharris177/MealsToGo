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
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { Container, tabBarOptions } from "./App.styling";

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

  const Screens = {
    Restaurants: {
      focus: "restaurant",
      notFocus: "restaurant-outline",
    },
    Map: {
      focus: "md-map",
      notFocus: "md-map-outline",
    },
    Settings: {
      focus: "settings",
      notFocus: "settings-outline",
    },
  };

  const CreateScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let focusSetting;
      if (focused === true) {
        focusSetting = "focus";
      } else {
        focusSetting = "notFocus";
      }
      let iconName = Screens[route.name][focusSetting];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={CreateScreenOptions}
              tabBarOptions={tabBarOptions}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
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
