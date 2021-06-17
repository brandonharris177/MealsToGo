import styled from "styled-components/native";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const SearchView = styled(View)`
  justify-content: center;
`;

export const ResturantList = styled(FlatList)`
  flex: 1;
`;
