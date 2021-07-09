import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/Location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearch = (text) => {
    setSearchKeyword(text);
  };

  return (
    <Searchbar
      placeholder="Search by location"
      onChangeText={onChangeSearch}
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
    />
  );
};
