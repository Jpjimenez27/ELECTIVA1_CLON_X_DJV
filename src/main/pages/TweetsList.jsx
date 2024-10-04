
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import tweetsData from "../../json/tweets.json";
export const TweetsList = () => {

  const [tweets, setTweets] = useState([]);
  useEffect(() => {

    getTweetsList();
  }, []);

  const getTweetsList = () => {
    //  await fetch('./../../json/tweets.json')
    //     .then(response => {
    //       console.log(response);

    //     })
    //     .then(data => setTweets(data))
    //     .catch(error => console.error('Error al cargar los tweets:', error));
    setTweets(tweetsData);
    console.log(tweets);

  }


  return (
    <section className='tweets'>

      {
        tweets.map((tweet, index) => {
          return <div className="tweet" key={index}>
            <div className="main-content-tweet">
              <div className="tweet-image">
                <img src={tweet.profileImage} alt="jajajaj" className='tweet-profile-image' />

              </div>
              <div className="texts">
                <div className="titles">
                  <a href="#" className='user-link'>{tweet.profileName}</a>
                  <span className='user-name gray-color'>{tweet.userName}</span>
                  <span className="date gray-color">26 feb. 2023</span>
                </div>
                <p className='tweet-content'>{tweet.content}</p>
                <div className="buttons">
                  <div className="button message-button">
                    <FontAwesomeIcon icon={faMessage} className='link-icon' />
                    <span>{tweet.comments}</span>
                  </div>
                  <div className="button">
                    <FontAwesomeIcon icon={faRetweet} className='link-icon' />
                    <span>{tweet.retweets}</span>
                  </div>
                  <div className="button">
                    <FontAwesomeIcon icon={faHeart} className='link-icon' />
                    <span>{tweet.likes}</span>
                  </div>
                  <div className="button">
                    <FontAwesomeIcon icon={faChartBar} className='link-icon' />
                    <span>{tweet.views}</span>
                  </div>
                  <div className="button">
                    <FontAwesomeIcon icon={faBookmark} className='link-icon' />

                  </div>
                </div>
              </div>

            </div>
          </div>
        })
      }

    </section>
  )
}
