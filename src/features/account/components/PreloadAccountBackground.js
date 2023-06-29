import React, { useEffect } from "react";
import { Asset } from "expo-asset";

import { AccountBackground } from "./account.styles";

export const PreloadAccountBackground = ({ children }) => {
  useEffect(() => {
    const preloadBackgroundImage = async () => {
      await Asset.loadAsync(require("../../../../assets/appBG-min.jpg"));
    };

    preloadBackgroundImage();
  }, []);

  return <AccountBackground>{children}</AccountBackground>;
};
