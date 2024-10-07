import './modal.css';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../auth/contexts/UserContext';
import { UserProvider } from '../auth/contexts/UserProvider';
import { useForm } from '../hooks/UseForm';
import { Navigate, replace, useNavigate } from 'react-router-dom';


const initForm = {
  email: '',
  password: ''
};

export const LoginModal = ({ isOpen, closeModal }) => {


  const { userState, loginUser, logoutUser } = useContext(UserContext);

  const { email, password, onInputChange } = useForm(initForm);

  const navigate = useNavigate();

  if (!isOpen) return null;

  const onLogin = () => {

    loginUser();
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    navigate("/home", { replace: true });
  };



  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
          <h2>Iniciar sesión en X</h2>
          <form onSubmit={onLogin} >
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


