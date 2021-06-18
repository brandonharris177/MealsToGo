import React, { useState, useContext } from "react";
import { Colors, ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import {
  SearchView,
  ResturantList,
  ActivityIndicatorView,
} from "./Resturants.screen.styling";
import { RestaurantsContext } from "../../../services/restaurants/Restaurants.context";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      {isLoading ? (
        <ActivityIndicatorView>
          <ActivityIndicator
            size={150}
            animating={true}
            color={Colors.blue800}
          />
        </ActivityIndicatorView>
      ) : (
        <ResturantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
