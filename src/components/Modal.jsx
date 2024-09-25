import './Login.css'; 
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../auth/contexts/UserContext';

const Modal = ({isOpen, closeModal}) => {
 
  const {userState, loginUser, logoutUser} = useContext(UserContext);

  if(!isOpen) return null;

  const onLogin = () => {
    console.log("login")
  };


  return (
<>
    <div className="modal-overlay">
      <div className="modal-content">
        <button color='red' onClick={closeModal}>X</button>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button type="submit" className="submit-button" onClick={onLogin} >Iniciar Sesión</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Modal;
