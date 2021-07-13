import React from "react";
import { RestaurantCard } from "../components/RestaurantCard";

import { SafeAreaView } from "react-native";

export const RestaurantDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView>
      <RestaurantCard restaurant={item} />
    </SafeAreaView>
  );
};
