import styled from "styled-components/native";
import { FlatList, View } from "react-native";

export const SearchView = styled(View)`
  justify-content: center;
  margin-top: ${(props) => props.theme.space[1]};
`;

export const ResturantList = styled(FlatList)`
  flex: 1;
`;

export const ActivityIndicatorView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
