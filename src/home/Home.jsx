import './home.css'
import logo from './../assets/images/twitter-logo.svg';
import googleLogo from "./../assets/images/Google_logo.webp";
import appleLogo from "./../assets/images/appleLogo.png";
import { LoginModal } from '../components/LoginModal';
import { useState } from 'react';
import { RegisterModal } from '../components/RegisterModal';
import { loginUserWithGoogle } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  const onLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      debugger;
      await loginUserWithGoogle();
       navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
     // alert("Correo o contraseña incorrecto");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);
  return (
    <div >
      <main className='home'>
        <div className="home_content container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="login_content">
            <h1>Lo que está pasando ahora</h1>
            <h2 className='join'>Únete Hoy</h2>
            <div className="buttons">
              <a className="white_button">
                <div className="content">
                  <div className="logo">
                    <img src={googleLogo} alt="" />
                  </div>
                  <p onClick={onLoginWithGoogle}>Iniciar sesión con Google</p>
                </div>
              </a>
              <div className="separation">
                <hr />
                <p>o</p>
                <hr />
              </div>
              <a onClick={() => setIsRegOpen(true)} className="create_account_button">Crear cuenta</a>
              {isRegOpen ? <RegisterModal isOpen={isRegOpen} closeModal={() => setIsRegOpen(false)} /> : <></>}
            </div>
            <p className='service_terms'>Al registrarte, aceptas los <a href="#">Términos de servicio</a> y la <a href="#">Política de privacidad</a>, incluida la política de <a href="#">Uso de Cookies</a>.</p>
            <br />
            <div>
              <h3>¿Ya tienes una cuenta?</h3>
              <div>
                <button className='twitter-button' onClick={() => setIsModalOpen(true)} >Iniciar sesión</button>
                {isModalOpen ? <LoginModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> : <></>}
              </div>
            </div>
          </div>

        </div>
        <footer className="footer">

          <div className="section1">
            <a href="#">Información</a>
            <a href="#">Descarga la app de X</a>
            <a href="#">Centro de Ayuda</a>
            <a href="#">Condiciones de Servicio</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Política de cookies  </a>
            <a href="#">Accesibilidad</a>
            <a href="#">Información de anuncios</a>
            <a href="#">Blog</a>
            <a href="#">Empleos</a>
            <a href="#">Recursos para marcas</a>
            <a href="#">Publicidad</a>

          </div>
          <div className="section2">
            <a href="#">Marketing</a>
            <a href="#">X para empresas</a>
            <a href="#">Desarrolladores</a>
            <a href="#">Guía</a>
            <a href="#">Configuración</a>
            <a href="#">© 2024 X Corp.</a>
          </div>
        </footer>
      </main>
    </div>



  )
}