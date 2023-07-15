import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEJW9u5YFl-60YP4DQnFr31Jw7xkZQxIs",
  authDomain: "chitchat-dc988.firebaseapp.com",
  projectId: "chitchat-dc988",
  storageBucket: "chitchat-dc988.appspot.com",
  messagingSenderId: "897469703544",
  appId: "1:897469703544:web:a2f69e94902507e040d48d"
};

export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage=getStorage();
export const db =getFirestore();