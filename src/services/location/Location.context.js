import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = (searchWord) => {
    setIsLoading(true);
    setKeyword(searchWord);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
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
  }, [keyword, error]);

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
