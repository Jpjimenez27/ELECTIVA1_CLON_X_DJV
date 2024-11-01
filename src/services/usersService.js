import { addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import FirebaseApp, { db } from './../firebase/config';
import { getUserIdByToken } from './authService';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


export const getUserInformationById = async () => {

    const userId = getUserIdByToken();
    try {
        const q = query(collection(db, "users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
            return userData;
        }
    } catch (error) {
        throw error
    }
}
export const getUserPictureById = async () => {
    const storage = getStorage(FirebaseApp);
    const imageRef = ref(storage, 'imagen_2024-10-29_205721981.png');
    const url = await getDownloadURL(imageRef);
}

export const followUser = async (userId) => {
    try {

        const myUserId = await getUserIdByToken();
        const queryUser = query(
            collection(db, "users"),
            where("userId", "==", userId)
        );

        const myQueryUser = query(
            collection(db, "users"),
            where("userId", "==", myUserId)
        );
        const userSnapShot = await getDocs(queryUser);
        const userDocRef = userSnapShot.docs[0].ref;
        const myUserSnapShot = await getDocs(myQueryUser);
        const myUserDocRef = myUserSnapShot.docs[0].ref;
        const userFollowers = userSnapShot.docs[0].data().followers;

        if (userFollowers.includes(myUserId)) {
            await updateDoc(userDocRef, {
                followers: arrayRemove(myUserId)
            });
            await updateDoc(myUserDocRef, {
                following: arrayRemove(userId)
            });
        } else {
            await updateDoc(userDocRef, {
                followers: arrayUnion(myUserId)
            });
            await updateDoc(myUserDocRef, {
                following: arrayUnion(userId)
            });
        }
    } catch (error) {
        throw error;
    }
}


export const getUserInformationByUserId = async (userId) => {


    try {
        const q = query(collection(db, "users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
            return userData;
        }
    } catch (error) {
        throw error
    }
}

export const getPeopleIFollow = async () => {


    try {
        const myUserId = await getUserIdByToken();
        const q = query(collection(db, "users"), where("userId", "==", myUserId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const following = querySnapshot.docs[0].data().following ;
            return following;
        }
    } catch (error) {
        throw error
    }
}