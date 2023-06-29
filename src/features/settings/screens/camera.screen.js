import React, { useState, useRef, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorText } from "../../account/components/account.styles";
import { View, TouchableOpacity, Text } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const cameraIcon = <Ionicons name="camera-outline" color="white" size={60} />;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CaptureButtonContainer = styled.View`
  flex: 1;
  background-color: "transparent";
  flex-direction: "column";
  align-items: center;
  justify-content: flex-end;
`;

const CaptureButton = styled.TouchableOpacity`
  align-self: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: tomato;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <ErrorText>No access to camera</ErrorText>;
  }

  return (
    <ProfileCamera
      ref={(cam) => (cameraRef.current = cam)}
      type={CameraType.front}
    >
      <CaptureButtonContainer>
        <CaptureButton onPress={snap}>{cameraIcon}</CaptureButton>
      </CaptureButtonContainer>
    </ProfileCamera>
  );
};
