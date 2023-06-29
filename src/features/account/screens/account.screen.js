import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import { ActivityIndicator } from "react-native-paper";

import { PreloadAccountBackground } from "../components/PreloadAccountBackground";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AccountTitle,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

const lockIcon = () => (
  <Ionicons name="lock-open-outline" size={24} color="white" />
);
const emailIcon = () => <Ionicons name="md-mail" size={24} color="white" />;

export const AccountScreen = ({ navigation }) => {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  useEffect(() => {
    const delayDisplaying = setTimeout(() => {
      setIsLoadingScreen(false);
      navigation.navigate("Main");
    }, 700);
    return () => clearTimeout(delayDisplaying);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoadingScreen) {
    return (
      <PreloadAccountBackground>
        <ActivityIndicator size="large" color="gray" />
      </PreloadAccountBackground>
    );
  }

  return (
    <PreloadAccountBackground>
      <AccountTitle>Meals To Go</AccountTitle>
      <AccountContainer>
        <AuthButton
          icon={lockIcon}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <SpacerBotOne />
        <AuthButton
          icon={emailIcon}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </PreloadAccountBackground>
  );
};
