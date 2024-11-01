import React, { useState, useEffect } from "react";
import "./profileView.css";
import { ModalFollowed } from "../pages/components/ModalFollowed";
import { ModalFollowers } from "../pages/components/ModalFollowers";
import { Link, useParams } from "react-router-dom";
import { faRetweet, faChartBar } from "@fortawesome/free-solid-svg-icons";
import {  faHeart,  faMessage,  faBookmark,} from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  getUserInformationByUsername,  getUserInformationById,} from "../../services/usersService";
import { getUserInformationTweets } from "../../services/tweetsService";

export const ProfileView = () => {
  const [profile, setProfile] = useState({});
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowedOpen, setIsFollowedOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState({});
  const [tweetsCounter, setTweetsCounter] = useState(1);
  const { user } = useParams();

  useEffect(() => {
    getUserData();
    getUserTweets();
  }, []);

 

  useEffect(() => {}, [isFollowedOpen]);
  const updatetweets = () => {
    setTweetsCounter(tweetsCounter + 1);
  };

  const getUserData = async () => {
    const response = await getUserInformationByUsername(user);
    console.log("response-->", response);

    setUserData(response);
  };

  const getUserTweets = async () => {
    const response = await getUserInformationTweets(user);
    console.log("response-- Tweet>", response);

    setTweets(response);
  };

  const returnFormattedDate = (date) => {
    if (!date || typeof date.toDate !== "function") {
      return "Loading";
    }

    const newDate = date.toDate();
    return `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
  };

  return (
    <>
      {userData != undefined ? (
        <div className="profile-container">
          <div className="header-static">
            <Link to={"/home"}>
              <button className="back-button" href="/home">
                ←
              </button>
            </Link>
            <div className="post-name">
              <h2 className="name-profile">{userData?.name ?? ""}</h2>
              <span className="posts-count">
                post {tweets?.length}
                {""}
              </span>
            </div>
          </div>
          <div className="header-avatar">
            <div className="header-image">
              <img
                src="https://gdb.voanews.com/01000000-c0a8-0242-60ff-08dc38b3a4ef_cx16_cy19_cw83_w1023_r1_s.jpg"
                alt="Header"
              />
            </div>
            <div className="profile-info">
              <div className="avatar">
                <img src={userData.urlPicture} alt="Header" />
              </div>
            </div>
            <div className="user-details"></div>
          </div>
          <div className="additional-info">
            <h3 className=" h3-profile">{userData.name}</h3>
            <a href={profile.website} target="_blank" rel="noopener noreferrer">
              @{userData.user}
            </a>
            <p>Fecha de nacimiento: {userData.birthdate || "Loading"}</p>
            <a
              href={userData.email}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              Se unió en: {returnFormattedDate(userData.date)}
            </p>
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
              {userData.followers?.length} Seguidores
              {isFollowersOpen ? (
                <ModalFollowers
                  isOpen={isFollowersOpen}
                  closeModal={() => {
                    setTimeout(() => {
                      setIsFollowersOpen(false);
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
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <section
        className="tweets tweets-profile"
        style={{ height: "100%", overflowY: "auto" }}
      >
        { tweets.slice(0, tweetsCounter * 10).map((userTweets) => (
          <div className="tweet" key={userTweets.user}>
            <div className="main-content-tweet">
              <div className="tweet-image">
                <img
                  src={userTweets.user.urlPicture}
                  alt={userTweets.user.user}
                  className="tweet-profile-image"
                />
              </div>
              <div className="texts">
                <div className="titles">
                  <span className="user-link">{userTweets.user.name}</span>
                   <div className="user-tweet"> @{userData.user}</div>
                  <span className="date gray-color">
                    {returnFormattedDate(userTweets.date)}
                  </span>
                </div>
                <p className="tweet-content">{userTweets.content}</p>
                <div className="buttons">
                  <div className="button message-button">
                    <FontAwesomeIcon icon={faMessage} className="link-icon" />
                  </div>
                  <div className="button retweet-button">
                    <FontAwesomeIcon icon={faRetweet} className="link-icon" />
                  </div>
                  <div className="button heart-button">
                    <FontAwesomeIcon icon={faHeart} className="link-icon" />
                    <span>{userTweets.likes.length}</span>
                  </div>
                  <div className="button view-button">
                    <FontAwesomeIcon icon={faChartBar} className="link-icon" />
                  </div>
                  <div className="button save-button">
                    <FontAwesomeIcon icon={faBookmark} className="link-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={updatetweets} className="show-tweets-button">
          Ver más tweets
        </button>
      </section>
    </>
  );
};
