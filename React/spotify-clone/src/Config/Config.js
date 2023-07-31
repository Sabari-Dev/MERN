// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLvOkr-B8aC2i_Xov7IOIjf2eFL6EZ34",
  authDomain: "spotify-clone-e4cb7.firebaseapp.com",
  projectId: "spotify-clone-e4cb7",
  storageBucket: "spotify-clone-e4cb7.appspot.com",
  messagingSenderId: "389300742849",
  appId: "1:389300742849:web:1b283f709aee2d79b70240",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
