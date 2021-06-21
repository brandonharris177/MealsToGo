import React, { createContext, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = (searchWord) => {
    if (!searchWord.length) {
      return;
    }
    setIsLoading(true);
    setKeyword(searchWord);
    locationRequest(searchWord.toLowerCase())
      .then(locationTransform)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log("Searching Error:", error);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: (searchWord) => {
          onSearch(searchWord);
        },
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
