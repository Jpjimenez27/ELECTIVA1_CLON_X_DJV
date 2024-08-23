import logo from './../assets/twitter-logo.svg';
import googleLogo from "./../assets/Google_logo.webp";
import appleLogo from "./../assets/appleLogo.png";
import './home.css'
export const Home = () => {
  return (
    <div className="container">


      <main className="home_content">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="login_content">
          <h1>Lo que está pasando ahora</h1>
          <h2>Únete Hoy</h2>
          <div className="buttons">
            <a className="white_button">
              <div className="content">
                <div className="logo">
                  <img src={googleLogo} alt="" />
                </div>
                <p>Registarse con Google</p>
              </div>


            </a>

            <a className="white_button">
              <div className="content">
                <div className="logo">
                  <img src={appleLogo} alt="" />
                </div>
                <p className='apple_button_text'>Registarse con Apple</p>
              </div>


            </a>
            <div className="separation">
              <hr />
              <p>o</p>
              <hr />
            </div>
            <a href="" className="create_account_button">Crear cuenta</a>
          </div>
          <p className='service_terms'>Al registrarte, aceptas los <a href="#">Términos de servicio</a> y la <a href="#">Política de privacidad</a>, incluida la política de <a href="#">Uso de Cookies</a>.</p>
          <div className="login_content">

          </div>
        </div>
      </main>
    </div>
  )
}