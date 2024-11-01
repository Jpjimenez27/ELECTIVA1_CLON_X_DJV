import { useState, useEffect } from "react";
import "./modalFollowers.css";
import { getUsersFollowers } from "../../../services/usersService";
import { Link, NavLink, replace } from "react-router-dom";

export const ModalFollowers = ({ isOpen, closeModal, user }) => {

  const [followers, setFollowers] = useState([]);
  const [followersCounter, setFollowersCounter] = useState(1);
  useEffect(() => {
    onGetUserFollowers();
  
  });
  if (!isOpen) return null;

  const updatetweets = () => {
    setFollowersCounter(followersCounter + 1);

  }

  const onGetUserFollowers = async () => {
  const response= await getUsersFollowers(user);
  setFollowers(response);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="text-followers">
          <h2>Seguidores</h2>{" "}
          <button className="close-button" onClick={closeModal}>X</button>
        </div>
        <ul className="followers-list">
          {followers.slice(0, followersCounter * 5).map((follower, index) => (
             <NavLink key={index} to={`/home/user/${follower.user}`}>
            <div  className="follower-item">
              <img
                src={follower.urlPicture}
                alt={follower.name}
                className="follower-image"
              />
              <div className="follower-details">
                <span className="follower-name">{follower.name}</span>
                <span className="follower-username">{follower.user.user}</span>
              </div>
              {/* <button className="follow-button">
               seguir
              </button> */}
            </div>
            </NavLink>
          ))}
          <button onClick={updatetweets} className='show-tweets-button'>Ver más seguidores</button>
        </ul>
      </div>
    </div>
  );
};
