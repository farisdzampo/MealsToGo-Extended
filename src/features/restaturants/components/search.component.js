import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

// const heartOutlineIcon = () => (
//   <Ionicons name="heart-outline" size={24} color="black" />
// );
// const heartFilledIcon = () => (
//   <Ionicons name="heart-filled" size={24} color="black" />
// );
const closeIcon = () => (
  <Ionicons name="close-outline" size={30} color="black" />
);

export const Search = ({ onFavoritesToggle, isFavoritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const heartIcon = () => {
    return (
      <Ionicons
        name={isFavoritesToggled ? "heart" : "heart-outline"}
        size={30}
      />
    );
  };

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  useEffect(() => {
    search(searchKeyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        icon={heartIcon}
        clearIcon={closeIcon}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
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
