import { mocks } from "./mock";
const camelize = require("camelize");

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) {
      rej("Not Found");
    }
    res(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformResult) => {
    console.log(transformResult);
  })
  .catch((error) => {
    console.log(error);
  });
