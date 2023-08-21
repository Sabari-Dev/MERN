import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiwPxht84mUJjICDM-fcTa0-ntqnrO5QE",
  authDomain: "online-shopping-5ea36.firebaseapp.com",
  projectId: "online-shopping-5ea36",
  storageBucket: "online-shopping-5ea36.appspot.com",
  messagingSenderId: "190750313146",
  appId: "1:190750313146:web:011f11835a0e99028e1083",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
