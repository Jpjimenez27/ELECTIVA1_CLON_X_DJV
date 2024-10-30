import { FirebaseAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { jwtDecode } from "jwt-decode";

export const registerUserWithEmail = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(userCredential);

    } catch (error) {
        throw error;
    }
}

export const loginUserWithEmail = async (email, password) => {

    try {

        const userCredentials = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(userCredentials);
        const token = await userCredentials.user.getIdToken();
        localStorage.setItem("token", token);
    } catch (error) {
        throw error;
    }
}

export const validateToken = () => {
    try {
        const token = localStorage.getItem("token");
        jwtDecode(token);
        return true;
    } catch (error) {
        return false;
    }
}

export const getUserIdByToken = () => {

    try {
        const token = localStorage.getItem("token");
        const tokenData = jwtDecode(token);
        const { user_id } = tokenData;
        return user_id;
    } catch (error) {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
}