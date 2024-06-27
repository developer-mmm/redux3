import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG4SbY4Eqern5yPzazeWuY9Xm_IGRGci4",
  authDomain: "redux-3-70671.firebaseapp.com",
  projectId: "redux-3-70671",
  storageBucket: "redux-3-70671.appspot.com",
  messagingSenderId: "385053771456",
  appId: "1:385053771456:web:af660c09bfcd07541c0f25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
