import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTOtdw9GCWsksszl-kMMmfngN2cZInxZM",
  authDomain: "shopping-app-ea689.firebaseapp.com",
  projectId: "shopping-app-ea689",
  storageBucket: "shopping-app-ea689.appspot.com",
  messagingSenderId: "721443499414",
  appId: "1:721443499414:web:4fe039d716e311e4a301b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
