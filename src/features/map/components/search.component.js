import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 40px;
`;

const mapIcon = () => (
  <Ionicons name="navigate-outline" size={24} color="black" />
);
const closeIcon = () => (
  <Ionicons name="close-outline" size={30} color="black" />
);

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  //   useEffect(() => {
  //     search(searchKeyword);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon={mapIcon}
        clearIcon={closeIcon}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
