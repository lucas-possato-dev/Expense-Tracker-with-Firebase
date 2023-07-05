import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzI2mfdiFs5ZAnOjKTn4Xa8BW0icNe0V0",
  authDomain: "expense-tracker-f15f6.firebaseapp.com",
  projectId: "expense-tracker-f15f6",
  storageBucket: "expense-tracker-f15f6.appspot.com",
  messagingSenderId: "1069441670929",
  appId: "1:1069441670929:web:a6ca5b27ebbf07656af6b0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
