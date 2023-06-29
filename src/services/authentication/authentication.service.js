import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../../config/firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDRElUz0WP6Ou6pvz1iPm2SSOiBRyF6H5Y",
//   authDomain: "mealstogo-166e5.firebaseapp.com",
//   projectId: "mealstogo-166e5",
//   storageBucket: "mealstogo-166e5.appspot.com",
//   messagingSenderId: "567065873067",
//   appId: "1:567065873067:web:c7bd6fb5314c1a7c9185ee",
// };

// const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
