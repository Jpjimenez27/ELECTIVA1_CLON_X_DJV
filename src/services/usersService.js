import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import FirebaseApp, { db } from './../firebase/config';
import { getUserIdByToken } from './authService';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


export const getUserInformationById = async () => {

    const userId = getUserIdByToken();
    try {
        const q = query(collection(db, "users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            return userData;
        }
    } catch (error) {
        throw error
    }
}
export const getUserPictureById=async()=>{
    const storage = getStorage(FirebaseApp);
    const imageRef = ref(storage, 'imagen_2024-10-29_205721981.png');
    const url = await getDownloadURL(imageRef); 
}
