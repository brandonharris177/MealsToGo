import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import { SearchView, ResturantList } from "./Resturants.screen.styling";
import { RestaurantsContext } from "../../../services/restaurants/Restaurants.context";

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);

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
        data={restaurantsContext.restaurants}
        renderItem={() => <RestaurantCard />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
