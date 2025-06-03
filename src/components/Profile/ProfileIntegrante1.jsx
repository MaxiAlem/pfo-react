import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SiHtml5, SiCss3, SiJavascript, SiGit } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import './ProfileIntegrante1.css';

//profile
import terricola from '../../assets/ProfileIntegrante1/terricola.webp'
//pelis
import the_thing from '../../assets/ProfileIntegrante1/the_thing.jpg'
import the_warriors from '../../assets/ProfileIntegrante1/Thewarriors.webp'
import marsAttack from '../../assets/ProfileIntegrante1/marsAttack.jpg';






const ProfileIntegrante1 = () => {

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <section className={`profile-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="card-container">
        <div className="card-image">
          <img src={terricola} alt="Foto de perfil" />
        </div>
        <div className="card-text">
          <h2>Hola</h2>
          <p>De día soy desarrollador web y de noche una sailor scout que lucha por el amor y la justicia.</p>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default ProfileIntegrante1;
