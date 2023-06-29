import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary}
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[1]};
`;
export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SpacerLeftOne = styled.View`
  margin-left: 16px;
`;
export const SpacerRightOne = styled.View`
  margin-right: 16px;
`;
export const SpacerBotOne = styled.View`
  margin-bottom: 16px;
`;
export const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
`;
