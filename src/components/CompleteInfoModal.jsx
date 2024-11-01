import { useRef, useState } from 'react';
import { addUser, completeUserInfo } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { uploadFileAndGetURL } from '../services/authService';
export const CompleteInfoModal = ({ isOpen, closeModal }) => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
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
            toast.current.show({ severity: 'error', summary: 'Error', detail:"Debes ser mayor de edad" });
        } else {
            setBirthdate(e.target.value);
        }
    };
    const onCompleteInfo = async (e) => {

        try {
            e.preventDefault();
            const URL = await uploadFileAndGetURL(profileImage);
            await completeUserInfo(name, user, birthdate, URL);
            debugger;
            navigate("/home", { replace: true });
        } catch (error) {
          
            toast.current.show({ severity: 'error', summary: 'Error', detail: error.message });
        }
    }
    return (
        <div className="modal-overlay">
             <Toast ref={toast} />
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>Completa tu registro</h2>
                <form onSubmit={onCompleteInfo}>
                    <div className="input-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" placeholder="Ingresa tu nombre" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="user">Nombre de usuario</label>
                        <input type="text" id="user" placeholder="Ingresa tu nombre de usuario" onChange={(e) => setUser(e.target.value)} />
                    </div>


                    <div>
                        <label htmlFor="dob">Fecha de Nacimiento</label>
                        <input type="date" id="dob" onChange={handleDateChange} />
                    </div>

                    <div className="input-group">
                        <input type="file" id="file" onChange={handleImageChange} />
                    </div>

                    <button type="submit" className="submit-button">Completar registro</button>
                </form>
                <p className="terms-text">
                    Al registrarte, aceptas nuestros <a href="/#">Términos de servicio</a> y la <a href="/#">Política de privacidad</a>.
                </p>
            </div>
        </div>
    );
}
