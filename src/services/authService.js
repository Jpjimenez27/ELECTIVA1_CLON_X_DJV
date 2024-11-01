import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db, FirebaseAuth, storage, Google } from '../firebase/config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { jwtDecode } from "jwt-decode";
import { v4 } from 'uuid';
import { getUserInformationByEmail } from './usersService';

export const registerUserWithEmail = async (email, password, user) => {

    try {

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("user", "==", user));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            alert("Nombre de usuario no disponible");
            return;
        };

        const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("token", token);
       

    } catch (error) {
        alert("Error al registrar usuario: ", error);
    }
};

export async function uploadFileAndGetURL(file) {

    const storageRef = ref(storage, v4());

    try {
        const snapshot = await uploadBytes(storageRef, file);
       

        const downloadURL = await getDownloadURL(storageRef);
     

        return downloadURL;
    } catch (error) {
        console.error("Error al subir el archivo o al obtener la URL:", error);
        throw error;
    }
};

export const addUser = async (name, user, userId, email, birthdate, URL) => {
    try {
        await addDoc(collection(db, "users"), {
            date: new Date(),
            name: name,
            user: user,
            userId: userId,
            email: email,
            birthdate: birthdate,
            urlPicture: URL,
            followers: [],
            following: []
        });
       
    } catch (error) {
        
    }
};

export const loginUserWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, Google);

        if (!result) {
            throw new Error("notRegistered");
        }

        const user = result.user;
        if (!user) {
            throw new Error("No se pudo obtener la información del usuario.");
        }

        const email = user.email;

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            const token = result.user.accessToken;
            
            localStorage.setItem("token", token);
            throw new Error("incomplete");
        } else {
            const token = result.user.accessToken;
            localStorage.setItem("token", token);

        }

    } catch (error) {
        console.error("Error en el inicio de sesión:", error.message);
        throw error;
    }
};

export const completeUserInfo = async (name, user, birthdate, URL) => {
    try {
        if (!name) {
            throw new Error("El Nombre es requerido");
        }
        if (!user) {
            throw new Error("El usuario es requerido");
        }

        if (!birthdate) {
            throw new Error("La fecha de nacimiento es requerido");
        }

        const userId = await getUserIdByToken();
        const email = await getUserEmailByToken();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("user", "==", user));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            throw new Error("El usuario está repetido");
        };
        
        await addDoc(collection(db, "users"), {
            date: new Date(),
            name: name,
            user: user,
            userId: userId,
            email: email,
            birthdate: birthdate,
            urlPicture: URL,
            followers: [],
            following: []
        });

    } catch (error) {

        throw error;
    }
};

export const loginUserWithEmail = async (email, password) => {

    try {

        const userCredentials = await signInWithEmailAndPassword(FirebaseAuth, email, password);
      
        const token = await userCredentials.user.getIdToken();
        localStorage.setItem("token", token);
    } catch (error) {
        throw error;
    }
};

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

export const getUserEmailByToken = () => {
    try {

        const token = localStorage.getItem("token");
        const tokenData = jwtDecode(token);

        const { email } = tokenData;
        return email;
    } catch (error) {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
}