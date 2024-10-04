import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faUsers, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import twitterLogo from './../../assets/images/twitter-logo.svg';
export const SideBar = () => {
    return (
        <nav className='nav'>
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
    )
}
