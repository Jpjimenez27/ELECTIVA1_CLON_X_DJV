import   './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faHeart, faHouse, faMarsStrokeUp, faMessage, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import twitterLogo from './../assets/images/twitter-logo.svg'
export const Main = () => {
  return (
    <main className='container main'>
      <nav >
        <div className="logo-image">
          <a href=""><img src={twitterLogo} alt="" className='twitter-logo' /></a>
        </div>

        <div className="links">
          <div className='link'>
            <FontAwesomeIcon icon={faHouse} className='link-icon' />
            <a href="#">Inicio</a>
          </div>
          <div className='link'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='link-icon' />
            <a href="#">Explorar</a>
          </div>
          <div className='link'>
            <FontAwesomeIcon icon={faBell} className='link-icon' />
            <a href="#">Notificaiones</a>
          </div>
          <div className='link'>
            <FontAwesomeIcon icon={faUsers} className='link-icon' />
            <a href="#">Comunidades</a>
          </div>
          <div className='link'>
            <FontAwesomeIcon icon={faUser} className='link-icon' />
            <a href="#">Perfil</a>
          </div>
        </div>
      </nav>
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
    </main>
  )
}
