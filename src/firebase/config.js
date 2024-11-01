import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIXkrvqy0Ll5lWx8Rrm_aah8hvnxyUeUc",
  authDomain: "clonx-46235.firebaseapp.com",
  projectId: "clonx-46235",
  storageBucket: "clonx-46235.appspot.com",
  messagingSenderId: "452975941188",
  appId: "1:452975941188:web:8c693a9febfc8cb10ace11"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const db = getFirestore(FirebaseApp);
export const storage = getStorage(FirebaseApp);
export const Google = new GoogleAuthProvider();
export default FirebaseApp;