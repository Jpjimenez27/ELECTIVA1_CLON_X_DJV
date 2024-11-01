import { useState, useEffect } from "react";
import "./modalFollowers.css";
import followedData from "../../../json/followed.json";
import { getUsersFollowing } from "../../../services/usersService";
import { NavLink } from "react-router-dom";

export const ModalFollowed = ({ isOpen, closeModal,user }) => {
  const [followed, setFollowed] = useState([]);
  const [followedCounter, setFollowedCounter] = useState(1);
  useEffect(() => {
    //(followedData);
    onGetUserFollowing();
  }, []);

  const updatetweets = () => {
    setFollowedCounter(followedCounter + 1);
  }

  const onGetUserFollowing = async () => {
    const response= await getUsersFollowing(user);
    setFollowed(response);
    }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="text-followers">
          {"  "}
          <h2>Seguidos</h2>{" "}
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
        <ul className="followers-list">
          {followed.slice(0, followedCounter * 5).map((followed, index) => (
            <NavLink key={index} to={`/home/user/${followed.user}`}>
            <div key={index} className="follower-item">
              <img
                src={followed.urlPicture}
                alt={followed.name}
                className="follower-image"
              />
              <div className="follower-details">
                <span className="follower-name">{followed.name}</span>

                <span className="follower-username">{followed.user.user}</span>
              </div>
              {/* <button className="followed-button">
                {followed.follow_status}
              </button> */}
            </div>
            </NavLink>
          ))}
          <button onClick={updatetweets} className='show-tweets-button'>Ver más seguidos</button>
        </ul>
      </div>
    </div>
  );
};
