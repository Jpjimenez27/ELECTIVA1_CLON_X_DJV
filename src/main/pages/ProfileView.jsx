import React, { useState, useEffect } from "react";
import "./profileView.css";
import { ModalFollowed } from "../pages/components/ModalFollowed";
import { ModalFollowers } from "../pages/components/ModalFollowers";
import { Link } from "react-router-dom";
import { faRetweet, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tweetsData from "../../json/profiletweets.json";
export const ProfileView = () => {
  const [profile, setProfile] = useState({});
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowedOpen, setIsFollowedOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [tweetsCounter, setTweetsCounter] = useState(1);

  useEffect(() => {
    getTweetsList();
  }, []);

  const getTweetsList = () => {
    setTweets(tweetsData);

  }

  useEffect(() => {
  }, [isFollowedOpen]);
  const updatetweets = () => {
    setTweetsCounter(tweetsCounter + 1);
  }

  return (
    <>
      <div className="profile-container">
        <div className="header-static">
          <Link to={"/home"}>
            <button className="back-button" href="/home">
              ←
            </button>
          </Link>
          <div className="post-name">
            <h2 className="name-profile">{profile.name}Cristiano Ronaldo</h2>
            <span className="posts-count">{profile.posts} 4.155 posts </span>
          </div>
        </div>

        <div className="header-avatar">

          <div className="header-image">

            <img
              src="https://pbs.twimg.com/profile_banners/155659213/1668980773/1080x360"
              alt="Header"
            />
          </div>


          <div className="profile-info">
            <div className="avatar">

              <img
                src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg"
                alt="Header"
              />
            </div>
          </div>
          <div className="user-details">
            <h2>{profile.name} </h2>
            <p>{profile.username} </p>
          </div>
        </div>


        <div className="additional-info">
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            {profile.website} @elmejordelmundo
          </a>
          <p>Fecha de nacimiento: 5 de febrero de 1985 {profile.birthday}</p>
          <p>Se unió en junio de 2010 {profile.joined}</p>
        </div>


        <div className="follow-info">
          <a onClick={() => setIsFollowedOpen(true)} className="following">
            {profile.following}4.564 Seguidos
            {isFollowedOpen ? (
              <ModalFollowed
                isOpen={isFollowedOpen}
                closeModal={() => {
                  setTimeout(() => {
                    setIsFollowedOpen(false);
                  }, 1);
                }}
              />
            ) : (
              <></>
            )}
          </a>

          {/* Modal para "Seguidores" */}
          <a onClick={() => setIsFollowersOpen(true)} className="following">
            {profile.followers} 567 Seguidores
            {isFollowersOpen ? (
              <ModalFollowers
                isOpen={isFollowersOpen}
                closeModal={() => {
                  setTimeout(() => {
                    setIsFollowersOpen(false)
                  }, 1);
                }}
              />
            ) : (
              <></>
            )}
          </a>
        </div>
        <div className="posts-count">
          {" "}
          {profile.description}
          Ninguna de las cuentas que sigues sigue a este usuario
        </div>
      </div>

      <section className='tweets tweets-profile' style={{ height: '100%', overflowY: 'auto' }}>
        {
          tweets.slice(0, tweetsCounter * 10).map((tweet, index) => {
            return <div className="tweet" key={index}>
              <div className="main-content-tweet">
                <div className="tweet-image">
                  <img src={tweet.profileImage} alt={tweet.userName} className='tweet-profile-image' />
                </div>
                <div className="texts">
                  <div className="titles">
                    <span className='user-link'>{tweet.profileName}</span>
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

    </>
  );
};
