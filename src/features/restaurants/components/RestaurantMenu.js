import React from "react";
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
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="food" />}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          theme={{
            colors: { primary: "tomato" },
          }}
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
