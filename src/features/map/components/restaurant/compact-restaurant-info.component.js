import React from "react";
import { Platform } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  margin-bottom: 10px;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  margin-bottom: 10px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary}
  text-align: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Title>{restaurant.name}</Title>
    </Item>
  );
};
