import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjUhkQEWDa5gG6rkBpS3-nksTdF05gqw8",
  authDomain: "remainder-app-b0393.firebaseapp.com",
  projectId: "remainder-app-b0393",
  storageBucket: "remainder-app-b0393.appspot.com",
  messagingSenderId: "611071458681",
  appId: "1:611071458681:web:8d557b9c0698fd654c83a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
