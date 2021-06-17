import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import {
  Container,
  SearchView,
  ResturantList,
} from "./Resturants.screen.styling";

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
        <ResturantList
          data={[{ name: "1" }, { name: "2" }, { name: "3" }]}
          renderItem={() => <RestaurantCard />}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </>
  );
};
