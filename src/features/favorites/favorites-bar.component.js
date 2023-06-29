import React, { Fragment } from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../map/components/restaurant/compact-restaurant-info.component";
import { SpacerRightOne } from "../restaturants/components/restaurant-info-card.styles";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

const FavText = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const FavoritesBar = ({ favorites, goToDetail }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <FavText>Favorites</FavText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Fragment key={key}>
              <TouchableOpacity
                onPress={() => goToDetail("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
              <SpacerRightOne />
            </Fragment>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
