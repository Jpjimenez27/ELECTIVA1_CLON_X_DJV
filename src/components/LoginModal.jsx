import './modal.css';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../auth/contexts/UserContext';

const LoginModal = ({ isOpen, closeModal }) => {

  const { userState, loginUser, logoutUser } = useContext(UserContext);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
  };
  
  if (!isOpen) return null;

  const onLogin = () => {
    console.log("login")
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
          <h2>Iniciar sesión en X</h2>
          <form onSubmit={functAutenticacion} >
            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="Ingresa tu correo" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="Ingresa tu contraseña" />
            </div>
            <br />
            <button type="submit" className="submit-button" onClick={onLogin} >Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
