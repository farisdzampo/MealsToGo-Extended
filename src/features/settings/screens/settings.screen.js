import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../restaturants/components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SettingsItem } from "../../account/components/account.styles";
import { AvatarContainer } from "../../account/components/account.styles";
import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";
import { SettingsEmailText } from "../../account/components/account.styles";

const heartIcon = () => <Ionicons name="heart" size={24} color="black" />;
const logoutIcon = () => (
  <Ionicons name="log-out-outline" size={24} color="black" />
);
const avatarIcon = () => <Ionicons name="person" size={80} color="white" />;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon
              size={120}
              icon={avatarIcon}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ backgroundColor: "#2182bd" }}
            />
          ) : (
            <Avatar.Image
              size={120}
              source={{ uri: photo }}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ backgroundColor: "#2182bd" }}
            />
          )}
        </TouchableOpacity>
        <SpacerBotOne />

        <SettingsEmailText>{user.email}</SettingsEmailText>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="black" icon={heartIcon} />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon={logoutIcon} />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
