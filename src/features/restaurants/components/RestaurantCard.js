import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name Unavailable",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    adress = "Restaurant Adress Unavailable",
    isOpenNow = false,
    rating = 3,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <StyledCard>
      <CardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <Paragraph>{adress}</Paragraph>
      </Card.Content>
    </StyledCard>
  );
};
