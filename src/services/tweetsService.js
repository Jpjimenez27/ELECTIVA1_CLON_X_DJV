import { addDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from './../firebase/config';
import { getUserIdByToken } from './authService';
import { getUserInformationById } from './usersService';

export const addTweet = async (tweetContent) => {

    const userId = getUserIdByToken();
    try {

        await addDoc(collection(db, "tweets"), {
            content: tweetContent,
            date: new Date(),
            user: await getUserInformationById(),
            userId
        });
    } catch (error) {

    }
}

export const getTweets = async () => {
    const userId = getUserIdByToken();
    const q = query(
        collection(db, "tweets"),
        where("userId", "!=", userId),
        orderBy("date", "desc")
    );
    const querySnapshot = await getDocs(q);
    const tweetsList = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));
    return tweetsList;

}

export const getUserInformationTweets = async (user) => {
    try {
        const q = query(
            collection(db, "tweets"),
            where("user.user", "==", user),
            // orderBy("date", "desc")
        );
        const querySnapshot = await getDocs(q);
        const userTweets = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));
        return userTweets || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
};