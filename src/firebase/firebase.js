import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5Mn1zrMH42cFC-3lKNGdvljIKlXuXXXo",
  authDomain: "login-c23a9.firebaseapp.com",
  projectId: "login-c23a9",
  storageBucket: "login-c23a9.appspot.com",
  messagingSenderId: "869586626300",
  appId: "1:869586626300:web:3f6938265602947cbc1979",
  measurementId: "G-CG2PXB7YWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
