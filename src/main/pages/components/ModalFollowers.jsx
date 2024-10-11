import { useState, useEffect } from "react";
import "./modalFollowers.css";
import followersData from "./../../../json/followers.json";

export const ModalFollowers = ({ isOpen, closeModal }) => {

  const [followers, setFollowers] = useState([]);
  const [followersCounter,setFollowersCounter]=useState(1);
  useEffect(() => {
    setFollowers(followersData);
  }, []);
  if (!isOpen) return null;

  const updatetweets = () => {
    setFollowersCounter(followersCounter + 1);

  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="text-followers">
          <h2>Seguidores</h2>{" "}
          <button className="close-button" onClick={closeModal}>X</button>
        </div>
        <ul className="followers-list">
          {followers.slice(0,followersCounter*5).map((follower, index) => (
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
          <button onClick={updatetweets} className='show-tweets-button'>Ver más seguidores</button>
        </ul>
      </div>
    </div>
  );
};
