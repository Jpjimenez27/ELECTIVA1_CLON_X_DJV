import { useState, useEffect } from "react";
import "./modalFollowers.css";
import followersData from "./../../../json/followers.json";

export const ModalFollowers = ({ isOpen, closeModal }) => {

  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setFollowers(followersData);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="text-followers">
         
          <h2>Who to follow</h2>{" "}
          <button className="close-button" onClick={closeModal}>X</button>
        </div>

        <ul className="followers-list">
          {followers.map((follower, index) => (
            <div key={index} className="follower-item">
              <img
                src={follower.image}
                alt={follower.name}
                className="follower-image"
              />

              <div className="follower-details">
                <span className="follower-name">{follower.name}</span>

                <span className="follower-username">{follower.username}</span>
              </div>
              <button className="follow-button">
                {follower.follow_status}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
