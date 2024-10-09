import React from 'react'
import   './profileView.css'
export const ProfileView = () => {
  return (
    <>
    <h1>Hola</h1>
    <div className="profile-container">
       
       <div className="profile-header">

         <div className="profile-info">
          
           <div className="profile-avatar">
          
             <img src="profile-avatar-url" alt="Avatar" />
           </div>

           <div className="profile-details">

             <h2>Victor Vasquez</h2>
             <p>@victor_vz1</p>

             <button className="verify-button">
               Consigue la verificación
             </button>

           </div>

         </div>

         <button className="edit-profile-btn">Editar perfil</button>
       </div>

      
       <div className="profile-tabs">

         <ul>

           <li className="active">Posts</li>
           <li>Respuestas</li>
           <li>Destacados</li>
           <li>Artículos</li>
           <li>Fotos y videos</li>
           <li>Me gusta</li>

         </ul>

       </div>

    
       <div className="profile-content">

         <h3>Empecemos la configuración</h3>


         <div className="config-options">
           <div className="option">

             <div className="option-box listo">LISTO</div>
             <p>Sigue 3 Temas</p>

           </div>

           <div className="option">

             <div className="option-box listo">LISTO</div>
             <p>Activa las notificaciones</p>

           </div>

           <div className="option">

             <div className="option-box listo">LISTO</div>
             <p>Activa las notificaciones</p>

           </div>


          
          

         </div>

       </div>

     </div>
    </>
  )
}
