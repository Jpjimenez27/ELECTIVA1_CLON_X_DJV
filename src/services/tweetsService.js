import { addDoc, collection, getDocs, orderBy, query, where, doc, getDoc, arrayUnion, updateDoc, arrayRemove } from 'firebase/firestore';
import { db } from './../firebase/config';
import { getUserIdByToken } from './authService';
import { getUserInformationById, getUserInformationByUserId } from './usersService';

export const addTweet = async (tweetContent) => {

    const userId =await getUserIdByToken();
    try {

        await addDoc(collection(db, "tweets"), {
            content: tweetContent,
            date: new Date(),
            user: await getUserInformationById(),
            userId,
            likes: []
        });
    } catch (error) {

    }
}



export const getTweets = async () => {
    const userId =await getUserIdByToken();

    const q = query(
        collection(db, "tweets"),
        where("userId", "!=", userId),
        orderBy("date", "desc")
    );
    const querySnapshot = await getDocs(q);
    const tweetsList = querySnapshot.docs.map(tweet => ({ id: tweet.id, ...tweet.data() }));

    const newt = await Promise.all(
        tweetsList.map(async tweet => {
            return {
                ...tweet,
                user: await getUserInformationByUserId(tweet.userId)
            };
        })
    );

    return newt;
}

export const addTweetLike = async (tweetId) => {

    const userId =await getUserIdByToken();
    try {

        const tweetRef = doc(db, "tweets", tweetId);
        const tweetSnapshot = await getDoc(tweetRef);
        const likesArray = tweetSnapshot.data().likes || [];
        if (likesArray.includes(userId)) {

            await updateDoc(tweetRef, {
                likes: arrayRemove(userId)
            });

        } else {

            await updateDoc(tweetRef, {
                likes: arrayUnion(userId)
            });

        }
    } catch (error) {
        return error;
    }
}


export const getUserInformationTweets = async (user) => {
    try {
        const q = query(
            collection(db, "tweets"),
            where("user.user", "==", user)
        );
        const querySnapshot = await getDocs(q);
        const tweetsList = querySnapshot.docs
            .map(tweet => ({ id: tweet.id, ...tweet.data() }))
            .sort((a, b) => b.date - a.date);
        return tweetsList || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
