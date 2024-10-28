import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faUsers, faUser, faMagnifyingGlass, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
import twitterLogo from './../../assets/images/twitter-logo.svg';
export const SideBar = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/", { replace: true });
    }

    return (
        <nav className='nav'>

            <div className="logo-image">
                <Link to={""}>
                    <img src={twitterLogo} alt="" className='twitter-logo' />
                </Link>
            </div>

            <div className="links">
                <div className='link'>
                    <Link to={""}>
                        <FontAwesomeIcon icon={faHouse} className='link-icon' />
                        <span >Inicio</span>
                    </Link>

                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='link-icon' />
                    <span >Explorar</span>
                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faBell} className='link-icon' />
                    <span >Notificaiones</span>
                </div>
                <div className='link'>
                    <FontAwesomeIcon icon={faUsers} className='link-icon' />
                    <span >Comunidades</span>
                </div>
                <div className='link'>
                    <Link to={"profile"}>
                        <FontAwesomeIcon icon={faUser} className='link-icon' />
                        <span>Perfil</span>
                    </Link>
                </div>
                <div className='link' onClick={logOut}>
                    <FontAwesomeIcon icon={faPowerOff} className='link-icon' />
                    <span>Cerrar Sesión</span>
                </div>
            </div>
        </nav>
    )
}
