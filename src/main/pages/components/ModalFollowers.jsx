import {useState,useEffect} from 'react'
import './modalFollowers.css'
import followersData from './../../../json/followers.json'
export const ModalFollowers = () => {

    const [followers, setFollowers] = useState([]);
 
  useEffect(() => {
   
    setFollowers(followersData);
  }, []);

  return (
    <div >
 
     
    <div className='text-followers'> <h2>Who to follow</h2> </div>

     <ul className="followers-list">

       {followers.map ( ( follower, index ) => (

         <div key={index} className="follower-item">

           <img src={follower.image} alt={follower.name} className="follower-image" />

           <div className="follower-details">

             <span className="follower-name">{follower.name}</span>

             <span className="follower-username">{follower.username}</span>
           </div>
           <button className="follow-button">{follower.follow_status}</button>
         </div>
       ))}
     </ul>
   </div>
  )
}
