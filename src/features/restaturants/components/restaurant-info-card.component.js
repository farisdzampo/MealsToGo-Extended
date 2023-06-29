import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  SpacerLeftOne,
  ClosedText,
} from "./restaurant-info-card.styles";
import { Favorite } from "../../favorites/favorite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.choosechicago.com/uploads/2019/05/Haisous_94915b3a-d132-4f22-9b09-1ff2a520d707-900x600.jpg",
    ],
    address = "100 Some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedText variant="label">CLOSED TEMPORARILY</ClosedText>
            )}
            <SpacerLeftOne />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <SpacerLeftOne />
            <Image width={15} height={15} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
