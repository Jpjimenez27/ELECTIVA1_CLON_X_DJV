import   './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faHeart, faHouse, faMarsStrokeUp, faMessage, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import twitterLogo from './../assets/images/twitter-logo.svg'

export const Sidebar = () => {
  return (
    <>
    
    <nav>

      <div className="logo-image">

        <a href="/"><img src={twitterLogo} alt="Logo" className='twitter-logo' /></a>

      </div>

      <div className="links">

        <div className='link'>

          <FontAwesomeIcon icon={faHouse} className='link-icon' />
          <a href="/home">Inicio</a>

        </div>

        <div className='link'>

          <FontAwesomeIcon icon={faMagnifyingGlass} className='link-icon' />
          <a href="#">Explorar</a>

        </div>

        <div className='link'>

          <FontAwesomeIcon icon={faBell} className='link-icon' />
          <a href="#">Notificaciones</a>
        </div>

        <div className='link'>

          <FontAwesomeIcon icon={faUsers} className='link-icon' />
          <a href="#">Comunidades</a>

        </div>

        <div className='link'>

          <FontAwesomeIcon icon={faUser} className='link-icon' />
          <a href="/home/Profile">Perfil</a>

        </div>

      </div>

    </nav>
     
    
    </>
  )
}
