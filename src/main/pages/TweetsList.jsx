
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faChartBar, faCalendar, faPhotoFilm, faPhotoVideo, faImage, faFileImage, faGift, faPoll, faSmile, faCalendarAlt, faMapMarkedAlt, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef } from 'react';
import tweetsData from "../../json/tweets.json";
export const TweetsList = () => {

  const [tweets, setTweets] = useState([]);
  const [canLoadTweets, setCanLoadTweets] = useState(true);
  const canLoadTweetsRef = useRef(canLoadTweets);
  useEffect(() => {

    getTweetsList();
  }, []);
  useEffect(() => {
    // Actualiza el ref cada vez que canLoadTweets cambia
    canLoadTweetsRef.current = canLoadTweets;
  }, [canLoadTweets]);
  const getTweetsList = () => {

    setTweets(tweetsData);
    console.log(tweets);

  }

  window.addEventListener("scroll", () => {

    if (window.innerHeight + window.scrollY >= (document.body.offsetHeight - 1) && canLoadTweetsRef.current) {
      console.log('Has llegado al final del scroll!');

      setCanLoadTweets(false);
      setTimeout(() => {
        setCanLoadTweets(true);
      }, 3000);
    }
  })

  return (
    <>
      <section className="publish-tweet">
        <div className="text-content">
          <div className="profile-image">
            <img src="https://pbs.twimg.com/profile_images/1802082255000473600/ldPO_hwY_400x400.jpg" alt="" />
          </div>
          <div className="publish-content">
            <textarea placeholder='¡¿Qué está pasando?!' rows={1}></textarea>

            <div className="buttons">
              <div className="icons">
                <FontAwesomeIcon icon={faImage} className='icon' />
                <FontAwesomeIcon icon={faFileImage} className='icon' />
                <FontAwesomeIcon icon={faPoll} className='icon' />
                <FontAwesomeIcon icon={faSmile} className='icon' />
                <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              </div>
              <button className='post-button' disabled>Postear</button>
            </div>

          </div>
        </div>
      </section>
      <section className='tweets' style={{ height: '100%', overflowY: 'auto' }}>
        {
          tweets.map((tweet, index) => {
            return <div className="tweet" key={index}>
              <div className="main-content-tweet">
                <div className="tweet-image">
                  <img src={tweet.profileImage} alt={tweet.userName} className='tweet-profile-image' />
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
                    <div className="button retweet-button">
                      <FontAwesomeIcon icon={faRetweet} className='link-icon' />
                      <span>{tweet.retweets}</span>
                    </div>
                    <div className="button heart-button">
                      <FontAwesomeIcon icon={faHeart} className='link-icon' />
                      <span>{tweet.likes}</span>
                    </div>
                    <div className="button view-button">
                      <FontAwesomeIcon icon={faChartBar} className='link-icon' />
                      <span>{tweet.views}</span>
                    </div>
                    <div className="button save-button">
                      <FontAwesomeIcon icon={faBookmark} className='link-icon' />

                    </div>
                  </div>
                </div>

              </div>
            </div>
          })
        }

      </section>
    </>
  )
}
