import "./main.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBarChart,  faHeart,  faHouse,  faMarsStrokeUp,  faMessage,  faRetweet,} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import twitterLogo from "./../assets/images/twitter-logo.svg";
import {getUserInformationByUsername, getUserInformationById,} from "../../services/usersService";

const userId = getUserIdByToken();
alert(userId)

export const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="logo-image">
          <a href="/">
            <img src={twitterLogo} alt="Logo" className="twitter-logo" />
          </a>
        </div>

        <div className="links">
          <div className="link">
            <FontAwesomeIcon icon={faHouse} className="link-icon" />
            <a href="/home">Inicio</a>
          </div>

          <div className="link">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="link-icon" />
            <a href="#">Explorar</a>
          </div>

          <div className="link">
            <FontAwesomeIcon icon={faBell} className="link-icon" />
            <a href="#">Notificaciones</a>
          </div>

          <div className="link">
            <FontAwesomeIcon icon={faUsers} className="link-icon" />
            <a href="/home/ProfileView">Comunidades</a>
          </div>

          <div className="link">
            <FontAwesomeIcon icon={faUser} className="link-icon" />
            {/* <a href="/home/">Perfil</a> */}
            <Link to={`/profile/${userId}`}>
              <span className="user-link">Mi Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
