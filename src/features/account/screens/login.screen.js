import React, { useState, useContext } from "react";

import { Ionicons } from "@expo/vector-icons";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  ErrorText,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const lockIcon = () => (
  <Ionicons name="lock-open-outline" size={24} color="white" />
);

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColor="transparent"
          onChangeText={(u) => setEmail(u)}
        />
        <SpacerBotOne />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          underlineColor="transparent"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
          </ErrorContainer>
        )}
        <SpacerBotOne />
        {!isLoading ? (
          <AuthButton
            icon={lockIcon}
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </AccountContainer>
      <SpacerBotOne />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
