import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantCard";
import { Container, SearchView, ListView } from "./Resturants.screen.styling";

export const RestauantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <Container>
        <SearchView>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchView>
        <ListView>
          <RestaurantInfo />
        </ListView>
      </Container>
    </>
  );
};
