import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import { SearchView, ResturantList } from "./Resturants.screen.styling";
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
      <ResturantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
