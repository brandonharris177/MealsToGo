import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { colors, spacing } from "../../../utils/styling";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    adress = "123 Main Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card>
      <Card.Cover
        key={name}
        source={{
          uri: photos[0],
        }}
        style={styles.cardCover}
      />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{adress}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    padding: spacing.med,
    backgroundColor: colors.secondary,
  },
});
