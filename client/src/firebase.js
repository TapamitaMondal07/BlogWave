// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogwave-815ad.firebaseapp.com",
  projectId: "blogwave-815ad",
  storageBucket: "blogwave-815ad.appspot.com",
  messagingSenderId: "904084768469",
  appId: "1:904084768469:web:698f0354c156c3bafb445c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);