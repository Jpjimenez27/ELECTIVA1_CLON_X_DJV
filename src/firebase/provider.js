import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { createContext, useContext } from "react";

const AuthContext = createContext()

export const useAuth = () => {
   const context = useContext(AuthContext)
   if (!context) throw new Error('Error in the auth provider')
   return context
};

export function AuthProvider ({children}) {

const signup = (email, password) => 
    createUserWithEmailAndPassword(FirebaseAuth, email, password);

const login = (email, password) =>  
    signInWithEmailAndPassword(FirebaseAuth, email, password);

    return (
        <AuthContext.Provider value={{signup, login}} >
         {children}
        </AuthContext.Provider>
    );
}