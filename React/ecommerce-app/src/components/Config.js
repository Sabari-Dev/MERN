// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
firebase.initializeApp(firebaseConfig);

export default firebase;
