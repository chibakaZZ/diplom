import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaIT5CcnkhArdOdHmaBYJVNKrDKhtelmg",
    authDomain: "diploma-8bbaf.firebaseapp.com",
    projectId: "diploma-8bbaf",
    storageBucket: "diploma-8bbaf.appspot.com",
    messagingSenderId: "271033689152",
    appId: "1:271033689152:web:d2aedc8df98b0c03702ba5",
    measurementId: "G-JXGFLPR62E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
