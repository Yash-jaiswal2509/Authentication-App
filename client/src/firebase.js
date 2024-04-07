// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-authentication-app-3896f.firebaseapp.com",
  projectId: "mern-authentication-app-3896f",
  storageBucket: "mern-authentication-app-3896f.appspot.com",
  messagingSenderId: "531299250582",
  appId: "1:531299250582:web:43d06e99e6b203cec66db7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);