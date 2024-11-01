import React, { useState, useEffect } from "react";
import "./profileView.css";
import { ModalFollowed } from "../pages/components/ModalFollowed";
import { ModalFollowers } from "../pages/components/ModalFollowers";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faRetweet, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMessage, faBookmark, } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { followUser, getPeopleIFollow, getUserInformationByUsername } from "../../services/usersService";
import { getUserInformationTweets } from "../../services/tweetsService";
import { getUserIdByToken } from "../../services/authService";

export const ProfileView = () => {
  const [profile, setProfile] = useState({});
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowedOpen, setIsFollowedOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState({});
  const [tweetsCounter, setTweetsCounter] = useState(1);
  const { user } = useParams();
  const [peopleIFollow, setPeopleIFollow] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
    getUserTweets();
    ongetPeopleIFollow();
  }, []);

  const ongetPeopleIFollow = async () => {
    const response = await getPeopleIFollow();
    setPeopleIFollow(response);

  }

  const checkIFollowUser = () => {
    return peopleIFollow.includes(userData.userId);
  }

  useEffect(() => { }, [isFollowedOpen]);
  const updatetweets = () => {
    setTweetsCounter(tweetsCounter + 1);
  };

  const getUserData = async () => {
    try {
      const response = await getUserInformationByUsername(user);
      setUserData(response);
    } catch (error) {
      navigate("/home", { replace: true });
    }

  };
  const getUserTweets = async () => {
    const response = await getUserInformationTweets(user);
    setTweets(response);
  };


  const returnFormattedDate = (tweetDate) => {
    if (!tweetDate) {
      return "";
    }
    const newDate = tweetDate.toDate();
    
    const options = {
      day: 'numeric',
      month: 'short', // "short" muestra el mes como una abreviatura, como "Nov."
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true // Esto hace que la hora se muestre en formato de 12 horas (AM/PM)
    };

    return newDate.toLocaleString('es-ES', options);
  };
  const onFollowUser = async (userId) => {

    await followUser(userId);
    await getUserData();
    await ongetPeopleIFollow();
  }

  const checkItsMyProfile = () => {
    return userData.userId === getUserIdByToken();
  }
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
              {userData.following?.length} Seguidos
              {isFollowedOpen ? (
                <ModalFollowed
                  isOpen={isFollowedOpen}
                  closeModal={() => {
                    setTimeout(() => {
                      setIsFollowedOpen(false);
                    }, 1);
                  }}
                  user={user}
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
                  user={user}
                />
              ) : (
                <></>
              )}
            </a>
            {
              !checkItsMyProfile() ? checkIFollowUser() ? <button className='follow-button' onClick={() => onFollowUser(userData.userId)}>Dejar de seguir</button> :
                <button className='follow-button' onClick={() => onFollowUser(userData.userId)}>Seguir</button> : <div></div>
            }

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
        {tweets.slice(0, tweetsCounter * 10).map((userTweets) => (
          <div className="tweet" key={userTweets.id}>
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
