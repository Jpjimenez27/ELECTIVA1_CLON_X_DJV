import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faChartBar, faImage, faFileImage, faPoll, faSmile, faCalendarAlt, faMapMarkerAlt, faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Link } from 'react-router-dom';
import { addTweet, addTweetLike, getTweets } from '../../services/tweetsService';
import { followUser, getPeopleIFollow} from '../../services/usersService';
import { getUserIdByToken } from '../../services/authService';
import { getUserInformationById, getUserPictureById } from '../../services/usersService';

export const TweetsList = () => {
  const op = useRef(null);
  const [tweets, setTweets] = useState([]);
  const [selectedUser, setSelectecUser] = useState({});
  const [newTweet, setNewTweet] = useState("");
  const [userData, setUserData] = useState({});
  const [tweetsCounter, setTweetsCounter] = useState(1);
  const [followingUsers, setFollowingUsers] = useState([]);
  const toast = useRef(null);
  useEffect(() => {
    getTweetsList();
    getUserData();
    onGetPopleIFollow();
  }, []);

  const getTweetsList = async () => {
    const response = await getTweets();
    console.log(response);
    setTweets(response);
  }

  const getUserData = async () => {
    const response = await getUserInformationById();
    setUserData(response);
  }

  const handleMouseLeave = () => {
    if (op.current) {
      op.current.hide();
    }
  };

  const updatetweets = () => {
    setTweetsCounter(tweetsCounter + 1);
  }

  const publishTweet = async () => {
    if (newTweet.trim().length === 0 || newTweet.length >= 280) return;

    await addTweet(newTweet);
    toast.current.show({ severity: 'success', summary: 'Tweet publicado', detail: 'Se ha publicado el tweet exitosamente' });
    setNewTweet("");

  }

  const onFollowUser = async (userId) => {
    console.log(selectedUser);

    await followUser(userId);
    await getTweetsList();
    await onGetPopleIFollow();
  }

  const returnFormattedDate = (tweetDate) => {


    const newDate = tweetDate.toDate();
    return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
  }

  const onAddTweetLike = async (tweetId) => {

    try {
      await addTweetLike(tweetId);
      await getTweetsList();
    } catch (error) {

    }
  }

  const checkIlikedTweet = (likes) => {
    if (!likes) {
      likes = [];
    }
    const userId = getUserIdByToken();
    return likes.includes(userId);
  }

  const onGetPopleIFollow=async ()=>{
   const response= await getPeopleIFollow();
   setFollowingUsers(response);
   console.log("---->",followingUsers);
   
  }

 const  checkIFollowUser=(userId)=>{
  if(!followingUsers){
    followingUsers=[];
  }
  return followingUsers.includes(userId);
 }

  return (
    <>
      <Toast ref={toast} />
      <section className="publish-tweet">
        <div className="text-content">
          <div className="profile-image">
            <img src={userData.urlPicture} alt="" />
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

          tweets.slice(0, tweetsCounter * 10).map((tweet) => {
            return <div className="tweet" key={tweet.id}>
              <div className="main-content-tweet">
                <div className="tweet-image">
                  <img src={tweet.user.urlPicture} alt={tweet.user.user} className='tweet-profile-image' />
                </div>
                <div className="texts">
                  <div className="titles">
                    <Link to={`user/${tweet.user.user}`}>
                      <span className='user-link' onMouseOver={
                        (e) => {
                          setSelectecUser(tweet);
                          op.current.toggle(e);
                        }} >{tweet.user.name}</span>
                    </Link>
                    <span className='user-name gray-color'>{tweet.username}</span>
                    <span className="date gray-color">{returnFormattedDate(tweet.date)}</span>
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
                      <FontAwesomeIcon color={checkIlikedTweet(tweet.likes) ? '#F91880' : ''} icon={checkIlikedTweet(tweet.likes) ? heartSolid : faHeart} onClick={() => onAddTweetLike(tweet.id)} className='link-icon' />
                      <span>{tweet?.likes?.length ?? 0}</span>

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
              <img src={selectedUser?.user?.urlPicture ?? ""} alt="" />
            </div>
            <Link to={`user/${selectedUser?.user?.user}`}>
              <h3>{selectedUser?.user?.name}</h3>
            </Link>
            <span>{selectedUser?.user?.user}</span>

          </div>
          <div className="follow-content">
            {
             !checkIFollowUser(selectedUser?.userId)? <button className='follow-button' onClick={()=>onFollowUser(selectedUser?.userId)}>Seguir</button>
            :<button className='follow-button' onClick={()=>onFollowUser(selectedUser?.userId)}>Dejar de seguir</button>
            }
          </div>
        </div>
        <div className="following-content">
          <p><span>{selectedUser?.user?.following?.length} </span>Siguiendo</p>
          <p><span>{selectedUser?.user?.followers?.length} </span>Seguidores</p>
        </div>
      </OverlayPanel>
    </>
  )
}
