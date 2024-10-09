import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbwarFsosiT73YkJGb35A4g8NQMBJfA2E",
  authDomain: "clonx-eb4ab.firebaseapp.com",
  projectId: "clonx-eb4ab",
  storageBucket: "clonx-eb4ab.appspot.com",
  messagingSenderId: "356179660167",
  appId: "1:356179660167:web:f0a6596c2b71de51349722",
  measurementId: "G-KX75S6P569"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);