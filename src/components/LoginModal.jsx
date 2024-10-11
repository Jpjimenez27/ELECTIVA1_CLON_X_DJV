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

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const { userState, loginUser, logoutUser } = useContext(UserContext);

  //const { email, onInputChange } = useForm(initForm);

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
              <input type="email" id="email" placeholder="Ingresa tu correo"onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="Ingresa tu contraseña" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <br />
            <button type="submit" className="submit-button" onClick={onLogin} >Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </>
  );
};


