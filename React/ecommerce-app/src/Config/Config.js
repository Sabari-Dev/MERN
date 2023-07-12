import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwXhe7dd914ffwjyaWZ7bqLzt0mDK7tU0",
  authDomain: "ecommerce-app-4b9c5.firebaseapp.com",
  projectId: "ecommerce-app-4b9c5",
  storageBucket: "ecommerce-app-4b9c5.appspot.com",
  messagingSenderId: "315896213446",
  appId: "1:315896213446:web:be6c6ca6391346ebc30cc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
