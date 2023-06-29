import React, { useContext } from "react";
import { SafeArea } from "../../restaturants/components/utility/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaturants/components/restaurant-info-card.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { FavErrorText } from "../../account/components/account.styles";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length === 0 && (
        <FavErrorText>You have no favorite restaurants yet</FavErrorText>
      )}
      <FlatList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
