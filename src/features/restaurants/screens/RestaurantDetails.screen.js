import React from "react";
import { RestaurantCard } from "../components/RestaurantCard";
import { RestaurantMenu } from "../components/RestaurantMenu.js";
import { DetailsSafeAreaView } from "./RestaurantDetails.screen.styling";

export const RestaurantDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <DetailsSafeAreaView>
      <RestaurantCard restaurant={item} />
      <RestaurantMenu />
    </DetailsSafeAreaView>
  );
};
