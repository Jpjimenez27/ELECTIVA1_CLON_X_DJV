import {arrayRemove, arrayUnion, collection,  getDocs, query, updateDoc, where } from 'firebase/firestore';
import  { db } from './../firebase/config';
import { getUserIdByToken } from './authService';



export const getUserInformationById = async () => {

    const userId =await getUserIdByToken();
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


export const getAllUsers = async () => {

    try {
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            let followersData = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));
            return followersData;
        }
    } catch (error) {
        throw error
    }
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

    }

}
export const getUserInformationByUsername = async (user) => {


    try {
        const q = query(collection(db, "users"), where("user", "==", user));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            return userData;
        }else{
            throw new Error("not exists");
        }
    } catch (error) {
        throw error;
    }
}


export const getUserInformationByEmail = async (email) => {


    try {
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            return userData;
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
            const following = querySnapshot.docs[0].data().following;
            return following;
        }
    } catch (error) {
        throw error
    }
};


export const getUsersFollowers = async (userName) => {

    const user = await getUserInformationByUsername(userName);
    const followers = user.followers;
    const q = query(collection(db, "users"), where("userId", "in", followers));
    const querySnapshot = await getDocs(q);
    let followersData = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));
    return followersData;
}


export const getUsersFollowing = async (userName) => {

    const user = await getUserInformationByUsername(userName);
    const following = user.following;
    const q = query(collection(db, "users"), where("userId", "in", following));
    const querySnapshot = await getDocs(q);
    let followersData = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));
    return followersData;
}