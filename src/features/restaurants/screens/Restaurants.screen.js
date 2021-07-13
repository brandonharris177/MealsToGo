import React, { useContext } from "react";
import { Pressable } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import {
  SearchView,
  ResturantList,
  ActivityIndicatorView,
} from "./Resturants.screen.styling";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/Search.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <>
      <SearchView>
        <Search />
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
            return (
              <Pressable
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <RestaurantCard restaurant={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
