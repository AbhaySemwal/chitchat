import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsakMmsEINu4oztWc16Se1numkZl4xJJw",
  authDomain: "newchitchat-f5f7f.firebaseapp.com",
  projectId: "newchitchat-f5f7f",
  storageBucket: "newchitchat-f5f7f.appspot.com",
  messagingSenderId: "928364777419",
  appId: "1:928364777419:web:c5f5acbe357a2fca2b304e",
  measurementId: "G-0XT2CZBJP8"
};

export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage=getStorage();
export const db =getFirestore();