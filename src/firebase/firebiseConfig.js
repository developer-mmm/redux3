import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPmfxUaSw2OqKASDcyC0vFabsaHO2OgXQ",
  authDomain: "redux-4.firebaseapp.com",
  projectId: "redux-4",
  storageBucket: "redux-4.appspot.com",
  messagingSenderId: "871225599588",
  appId: "1:871225599588:web:e7695d69aee24e339d2171"
};

const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

export const db = getFirestore(app);