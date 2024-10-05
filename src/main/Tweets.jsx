import   './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faHeart, faHouse, faMarsStrokeUp, faMessage, faRetweet } from '@fortawesome/free-solid-svg-icons';


export const Tweets = () => {
  return (
    <>
    <div className="main-content">
        <section className='tweets'>
          <div className="tweet">
            <div className="main-content">
              <img src="https://pbs.twimg.com/profile_images/1755882741176913920/3l3AFLq2_400x400.png" alt="jajajaj" />
              <div className="texts">
                <div className="titles">
                  <a href="#">Manchester United </a>
                  <span className='user-name'>@ManUtd</span>
                  <span className="date">26 feb. 2023</span>
                </div>
                <p className='tweet-content'>The Erik ten Hag era has begun.</p>
              </div>
              <div className="buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faMessage} className='link-icon' />
                  <span>6 mil</span>
                </div>
                <div className="button">
                  <FontAwesomeIcon icon={faRetweet} className='link-icon' />
                  <span>56 mil</span>
                </div>
                <div className="button">
                  <FontAwesomeIcon icon={faHeart} className='link-icon' />
                  <span>84 mil</span>
                </div>
                <div className="button">
                  <FontAwesomeIcon icon={faBarChart} className='link-icon' />
                  <span>54 M</span>
                </div>
                <div className="button">
                  <FontAwesomeIcon icon={faMarsStrokeUp} className='link-icon' />

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
    
    </>
  )
}

