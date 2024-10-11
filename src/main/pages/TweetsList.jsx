
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faChartBar, faImage, faFileImage, faPoll, faSmile, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef } from 'react';
import tweetsData from "../../json/tweets.json";
import { OverlayPanel } from 'primereact/overlaypanel';
import profilePhoto from './../../assets/images/santiagoPhoto.png'
import { Link } from 'react-router-dom';
export const TweetsList = () => {
  const op = useRef(null);
  const [tweets, setTweets] = useState([]);
  const [selectedUser, setSelectecUser] = useState({});
  const [newTweet, setNewTweet] = useState("");

  const [tweetsCounter, setTweetsCounter] = useState(1);

  useEffect(() => {
    getTweetsList();
  }, []);

  const getTweetsList = () => {
    setTweets(tweetsData);

  }

  const handleMouseLeave = () => {
    if (op.current) {
      op.current.hide();
    }
  };

  const updatetweets = () => {
    setTweetsCounter(tweetsCounter + 1);
  }

  const publishTweet = () => {
    if (newTweet.trim().length === 0 || newTweet.length >= 280) return;
    const newPublishTweet = {
      profileImage: profilePhoto,
      profileName: "Santiago Osorio",
      username: "@santiosiuwu",
      content: newTweet,
      comments: 0,
      likes: 0,
      retweets: 0,
      views: 0
    }
    setTweets([newPublishTweet, ...tweets]);
    setNewTweet("");
  }

  return (
    <>
      <section className="publish-tweet">
        <div className="text-content">
          <div className="profile-image">
            <img src={profilePhoto} alt="" />
          </div>
          <div className="publish-content">
            <textarea placeholder='¡¿Qué está pasando?!' rows={1} onChange={(e) => {
              if (e.target.value.length > 280) return;
              setNewTweet(e.target.value)
            }} value={newTweet}></textarea>
            <div className="buttons">
              <div className="icons">
                <FontAwesomeIcon icon={faImage} className='icon' />
                <FontAwesomeIcon icon={faFileImage} className='icon' />
                <FontAwesomeIcon icon={faPoll} className='icon' />
                <FontAwesomeIcon icon={faSmile} className='icon' />
                <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              </div>
              <button className='post-button' onClick={publishTweet}>Postear</button>
            </div>
          </div>
        </div>
      </section>
      <section className='tweets' style={{ height: '100%', overflowY: 'auto' }}>
        {

          tweets.slice(0, tweetsCounter * 10).map((tweet, index) => {
            return <div className="tweet" key={index}>
              <div className="main-content-tweet">
                <div className="tweet-image">
                  <img src={tweet.profileImage} alt={tweet.username} className='tweet-profile-image' />
                </div>
                <div className="texts">
                  <div className="titles">
                    <Link to={`user/${tweet.username}`}>
                      <span className='user-link' onMouseOver={
                        (e) => {
                          setSelectecUser(tweet);
                          op.current.toggle(e);
                        }} >{tweet.profileName}</span>
                    </Link>
                    <span className='user-name gray-color'>{tweet.username}</span>
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
        <button onClick={updatetweets} className='show-tweets-button'>Ver más tweets</button>
      </section>
      <OverlayPanel ref={op} className='overlayContent' onMouseLeave={handleMouseLeave}>
        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-image">
              <img src={selectedUser.profileImage} alt="" />
            </div>
            <Link to={`user/${selectedUser.username}`}>
              <h3>{selectedUser.profileName}</h3>
            </Link>
            <span>{selectedUser.username}</span>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div className="follow-content">
            <button className='follow-button'>Seguir</button>
          </div>
        </div>
        <div className="following-content">
          <p><span>197 </span>Siguiendo</p>
          <p><span>956 </span>Seguidores</p>
        </div>
      </OverlayPanel>
    </>
  )
}
