import styled from "styled-components/native";

import { Button, List, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/appBG-min.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 24px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
  border-radius: 10px;
`;

export const AccountTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 12px;
`;

export const ErrorContainer = styled.View`
  max-width: 250px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  background-color: rgba(173, 216, 230, 0.7);
  border-radius: 6px;
`;

export const ErrorText = styled.Text`
  color: darkred;
  padding: 4px;
`;

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const SettingsEmailText = styled.Text`
  color: black;
  font-weight: medium;
  font-size: 24px;
`;

export const FavErrorText = styled.Text`
  color: darkred;
  font-size: 20px;
  padding: 4px;
`;
