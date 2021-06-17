import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image, View } from "react-native";

export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardContent = styled(Card.Content)`
  padding-top: ${(props) => props.theme.space[2]};
`;

export const RatingOpenWrapper = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

export const RatingWrapper = styled(View)`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

export const IconWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const TypeIcon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-left: ${(props) => props.theme.space[2]};
`;
