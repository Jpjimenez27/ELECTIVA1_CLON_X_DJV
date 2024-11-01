import './modal.css';
import { useState } from 'react';
import { addUser, getUserIdByToken, registerUserWithEmail } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { uploadFileAndGetURL } from '../services/authService';

export const RegisterModal = ({ isOpen, closeModal }) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const ageLimit = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    if (selectedDate > ageLimit) {
      e.target.value = ""; 
      alert("Debes ser mayor de edad")
    } else {
      setBirthdate(e.target.value);
    }
  };

  const onRegister = async (e) => {
    e.preventDefault();

    try {

      await registerUserWithEmail(email, password, user);
      const userId =await getUserIdByToken();
      const URL = await uploadFileAndGetURL(profileImage);
    
      await addUser(name, user, userId, email, birthdate, URL);
      navigate("/home", { replace: true });
    } catch (error) {
      console.error("Error durante el registro:", error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Crea tu cuenta</h2>
        <form onSubmit={onRegister}>
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Ingresa tu nombre" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="user">Nombre de usuario</label>
            <input type="text" id="user" placeholder="Ingresa tu nombre de usuario" onChange={(e) => setUser(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Crea una contraseña" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <label htmlFor="dob">Fecha de Nacimiento</label>
            <input type="date" id="dob" onChange={handleDateChange} />
          </div>

          <div className="input-group">
            <input type="file" id="file" onChange={handleImageChange} />
          </div>

          <button type="submit" className="submit-button">Registrarse</button>
        </form>
        <p className="terms-text">
          Al registrarte, aceptas nuestros <a href="/#">Términos de servicio</a> y la <a href="/#">Política de privacidad</a>.
        </p>
      </div>
    </div>
  );
};