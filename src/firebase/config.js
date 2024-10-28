import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

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
export default FirebaseApp;