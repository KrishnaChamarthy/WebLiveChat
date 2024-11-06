// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-df0cc.firebaseapp.com",
  projectId: "reactchat-df0cc",
  storageBucket: "reactchat-df0cc.appspot.com",
  messagingSenderId: "711968376803",
  appId: "1:711968376803:web:aae0169f23dff6266902d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pass `app` as an argument to ensure correct initialization
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
