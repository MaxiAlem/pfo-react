import React from 'react';
import './ProfileIntegrante2.css'; // Asegúrate de crear este archivo CSS para estilos personalizados

const ProfileIntegrante2 = () => {
  return (
    <div className="profile-page">
      <h1>Perfil de Integrante 2</h1>
      <div className="profile-content">
        <img
          src="/assets/team/integrante2.jpg"
          alt="Integrante 2"
          className="profile-photo"
        />
        <div className="profile-details">
          <h2>[Tu Nombre]</h2>
          <p><strong>Rol:</strong> Desarrollador Frontend (Weather Components)</p>
          <p><strong>Descripción:</strong> Soy [tu nombre], estudiante de Técnico Superior en Desarrollo de Software. En este proyecto, me encargué de desarrollar el hero carrusel, el buscador y el widget de clima utilizando la API de OpenWeather. Apasionado por el desarrollo web y la creación de interfaces interactivas.</p>
          <p><strong>Contribuciones:</strong></p>
          <ul>
            <li>Implementación del carrusel de clima con react-slick.</li>
            <li>Desarrollo del buscador de ciudades con tarjetas de resultados.</li>
            <li>Creación del widget basado en IP para mostrar clima y hora local.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntegrante2;