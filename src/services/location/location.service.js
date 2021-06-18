import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((res, rej) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      rej("Not Found");
    }
    res(locationMock);
  });
};

export const locationTransform = (res) => {
  const camelizedRes = camelize(res);
  const { geometry = {} } = camelizedRes.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
