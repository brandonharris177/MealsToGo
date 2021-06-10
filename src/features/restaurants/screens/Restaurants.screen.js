import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/Restaurant-info.component";
import { colors, spacing } from "../../../utils/styling";

const isAndroid = Platform.OS === "android";

export const RestauantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchView}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.listView}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchView: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    padding: spacing.sm,
  },
  listView: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.sm,
  },
});
