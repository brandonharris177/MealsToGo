import { Platform, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const tabBarOptions = {
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
};
