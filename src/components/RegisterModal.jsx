import './modal.css';


export const RegisterModal = ({ isOpen, closeModal }) => {
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>Crea tu cuenta</h2>
            <form>
              <div className="input-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Ingresa tu nombre" />
              </div>

              <div className="input-group">
                <label htmlFor="user">Nombre de usuario</label>
                <input type="text" id="user" placeholder="Ingresa tu nombre de usuario" />
              </div>

              <div className="input-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" placeholder="Ingresa tu correo" />
              </div>
    
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Crea una contraseña" />
              </div>
    
              <div className="input-group">
                <label htmlFor="dob">Fecha de Nacimiento</label>
                <input type="date" id="dob" />
              </div>
    
              <button type="submit" className="submit-button">Registrarse</button>
            </form>
            <p className="terms-text">
              Al registrarte, aceptas nuestros <a href="/#">Términos de servicio</a> y la <a href="/#">Política de privacidad</a>.
            </p>
          </div>
        </div>
      );
}
