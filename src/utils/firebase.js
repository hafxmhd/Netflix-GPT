// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAMTBQJLFaBnKd3jqHckD1zrjZr1DmWgq8",
  authDomain: "netflix-gpt-7f562.firebaseapp.com",
  projectId: "netflix-gpt-7f562",
  storageBucket: "netflix-gpt-7f562.appspot.com",
  messagingSenderId: "347328998631",
  appId: "1:347328998631:web:fd20f741356d7c72940642",
  measurementId: "G-BLH4SVEVFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();