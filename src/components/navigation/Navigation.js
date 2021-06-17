import React from "react";
import { Text, View } from "react-native";
import { RestaurantsScreen } from "../../features/restaurants/screens/Restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { tabBarOptions } from "./Navigation.styling";

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

export const Navigation = () => {
  return (
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
  );
};
