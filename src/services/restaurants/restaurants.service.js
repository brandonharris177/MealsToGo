import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) {
      rej("Not Found");
    }
    res(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    if (restaurant.photos[0].html_attributions) {
      restaurant.photos = restaurant.photos[0].html_attributions;
    } else {
      restaurant.photos = [];
    }
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
