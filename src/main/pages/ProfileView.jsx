import React, { useState, useEffect } from "react";
import "./profileView.css";
import profileData from "../../json/profile.json";
import { ModalFollowed } from "../pages/components/ModalFollowed";
import { ModalFollowers } from "../pages/components/ModalFollowers";
import { Avatar } from "primereact/avatar";

export const ProfileView = () => {
  const [profile, setProfile] = useState({});
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowedOpen, setIsFollowedOpen] = useState(false);

  useEffect(() => {
    setProfile(profileData);
  }, []);

  return (
    <>
      <div className="profile-container">
        {/* Flecha y publicaciones */}
        <div className="header-static">
          <button className="back-button" href="/home">
            ←
          </button>
          <div className="post-name">
            <h2 className="name-profile">{profile.name}Cristiano Ronaldo</h2>
            <span className="posts-count">{profile.posts} 4.155 posts </span>
          </div>
        </div>

        <div className="header-avatar">
          {/* Imagen de encabezado */}
          <div className="header-image">
            {/* <img src= {profile.headerImage} alt="Header" /> */}
            <img
              src="https://pbs.twimg.com/profile_banners/155659213/1668980773/1080x360"
              alt="Header"
            />
          </div>

          {/* Información del perfil */}
          <div className="profile-info">
            <div className="avatar">
              {/* <img src={profile.avatar} alt="Avatar" /> */}
              <img
                src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg"
                alt="Header"
              />
            </div>
          </div>
          <div className="user-details">
            <h2>{profile.name} </h2>
            <p>{profile.username} </p>
          </div>
        </div>

        {/* Información adicional */}
        <div className="additional-info">
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            {profile.website} @elmejordelmundo
          </a>
          <p>Fecha de nacimiento: 5 de febrero de 1985 {profile.birthday}</p>
          <p>Se unió en junio de 2010 {profile.joined}</p>
        </div>

        {/* Seguidores y seguidos */}
        <div className="follow-info">
          <a onClick={() => setIsFollowedOpen(true)} className="following">
            {profile.following}4.564 Seguidos
            {isFollowedOpen ? (
              <ModalFollowed
                isOpen={isFollowedOpen}
                closeModal={() => {
                  alert(isFollowedOpen)
                  setIsFollowedOpen(false)
                  alert(isFollowedOpen)
                }}
              />
            ) : (
              <></>
            )}
          </a>

          {/* Modal para "Seguidores" */}
          <a onClick={() => setIsFollowersOpen(true)} className="following">
            {profile.followers} 567 Seguidores
            {isFollowersOpen ? (
              <ModalFollowers
                isOpen={isFollowersOpen}
                closeModal={() => setIsFollowersOpen(false)}
              />
            ) : (
              <></>
            )}
          </a>
        </div>
        <div className="posts-count">
          {" "}
          {profile.description}
          Ninguna de las cuentas que sigues sigue a este usuario
        </div>
      </div>
    </>
  );
};
