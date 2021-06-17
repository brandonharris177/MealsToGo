import { mocks } from "./mock/";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) {
      rej("Not Found");
    }
    res(mock);
  });
};

restaurantsRequest()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.log(error);
  });
