import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import "@env";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

// const firebaseConfig = {
//   apiKey: "AIzaSyDRElUz0WP6Ou6pvz1iPm2SSOiBRyF6H5Y",
//   authDomain: "mealstogo-166e5.firebaseapp.com",
//   projectId: "mealstogo-166e5",
//   storageBucket: "mealstogo-166e5.appspot.com",
//   messagingSenderId: "567065873067",
//   appId: "1:567065873067:web:c7bd6fb5314c1a7c9185ee",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   signInWithEmailAndPassword(auth, "dzampica@dzampica.com", "test123")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       setIsAuthenticated(true);
  //       console.log(isAuthenticated);
  //       // ...
  //     })
  //     .catch((error) => {
  //       setIsAuthenticated(false);
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       console.log(errorMessage);
  //       console.log(isAuthenticated);
  //     });
  // }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
