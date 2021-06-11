import React, { useState } from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantCard";
import styled from "styled-components/native";
import { colors, spacing } from "../../../utils/styling";

const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchView = styled(View)`
  background-color: ${colors.secondary};
  justify-content: center;
  padding: ${spacing.sm}%;
`;

const ListView = styled(View)`
  flex: 1;
  background-color: ${colors.primary};
  padding: ${spacing.sm}%;
`;

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
