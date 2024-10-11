import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faUsers, faUser, faMagnifyingGlass, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
import twitterLogo from './../../assets/images/twitter-logo.svg';
export const SideBar = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/", { replace: true });
    }

    return (
        <nav className='nav'>
            <div className="logo-image">
                <a href="/#"><img src={twitterLogo} alt="" className='twitter-logo' /></a>
            </div>

            <div className="links">
                <div className='link'>
                    <Link to={""}>
                        <FontAwesomeIcon icon={faHouse} className='link-icon' />
                        <a href="/#">Inicio</a>
                    </Link>

                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='link-icon' />
                    <a href="/#">Explorar</a>
                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faBell} className='link-icon' />
                    <a href="/#">Notificaiones</a>
                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faUsers} className='link-icon' />
                    <a href="/#">Comunidades</a>
                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faUser} className='link-icon' />
                    <a href="/#">Perfil</a>
                </div>
                <div className='link' onClick={logOut}>
                    <FontAwesomeIcon icon={faPowerOff} className='link-icon' />
                    <a href='/#' >Cerrar Sesión</a>
                </div>
            </div>
        </nav>
    )
}
