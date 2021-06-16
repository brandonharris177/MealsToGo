import styled from "styled-components/native";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[1]};
`;

export const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
