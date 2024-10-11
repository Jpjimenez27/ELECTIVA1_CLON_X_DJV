import { useState, useEffect } from "react";
import "./modalFollowers.css";
import followedData from "../../../json/followed.json";

export const ModalFollowed = ({ isOpen, closeModal }) => {
  const [followed, setFollowed] = useState([]);
  const [followedCounter, setFollowedCounter] = useState(1);
  useEffect(() => {
    setFollowed(followedData);
  }, []);

  const updatetweets = () => {
    setFollowedCounter(followedCounter + 1);
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
            <div key={index} className="follower-item">
              <img
                src={followed.image}
                alt={followed.name}
                className="follower-image"
              />
              <div className="follower-details">
                <span className="follower-name">{followed.name}</span>

                <span className="follower-username">{followed.username}</span>
              </div>
              <button className="followed-button">
                {followed.follow_status}
              </button>
            </div>
          ))}
          <button onClick={updatetweets} className='show-tweets-button'>Ver más seguidos</button>
        </ul>
      </div>
    </div>
  );
};
