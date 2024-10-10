import React, { useState, useEffect } from 'react';
import './profileView.css';
import profileData from '../../json/profile.json'; 
import { ModalFollowed } from '../pages/components/ModalFollowed';
import { ModalFollowers } from '../pages/components/ModalFollowers';


export const ProfileView = () => {

  const [ profile, setProfile ] = useState({});
  const [ isFollowersOpen, setIsFollowersOpen ] = useState ( false );
  const [ isFollowedOpen, setIsFollowedOpen ] = useState ( false ) ;
  
  
  useEffect(() => {
    
    setProfile(profileData);

  }, []);

  return (
    <>
      <div className="profile-container">
        {/* Flecha y publicaciones */}
        <div className="header-static">
          <button className="back-button">←</button>
          <span className="posts-count">{profile.posts} posts</span>
        </div>

        {/* Imagen de encabezado */}
        <div className="header-image">
          <img src={profile.headerImage} alt="Header" />
         
        </div>

        {/* Información del perfil */}
        <div className="profile-info">
          <div className="avatar">
            <img src={profile.avatar} alt="Avatar" />
          </div>
          <div className="user-details">
            <h2>{profile.name}</h2>
            <p>{profile.username}</p>
          </div>
        </div>

        {/* Información adicional */}
        <div className="additional-info">
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            {profile.website}
          </a>
          <p>Fecha de nacimiento: {profile.birthday}</p>
          <p>Se unió en {profile.joined}</p>
        </div>

        {/* Seguidores y seguidos */}
        <div className="follow-info">
        <a 
            onClick={() => setIsFollowedOpen(true)}  
            className="following">
            {profile.following} Seguidos
            {isFollowedOpen && <ModalFollowed isOpen={isFollowedOpen} closeModal={() => setIsFollowedOpen(false)} />}
          </a>

          {/* Modal para "Seguidores" */}
          <a 
            onClick={() => setIsFollowersOpen(true)}  
            className="following">
            {profile.followers} Seguidores
            {isFollowersOpen && <ModalFollowers isOpen={isFollowersOpen} closeModal={() => setIsFollowersOpen(false)} />}
          </a>
          
        </div>
      </div>
    </>
  );
};
