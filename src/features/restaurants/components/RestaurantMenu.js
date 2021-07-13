import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantMenu = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          title="Breakfast"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="coffee" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="food" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
