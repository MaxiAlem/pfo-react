import React from 'react';
import './ProfileIntegrante3.css';

const ProfileIntegrante3 = () => {
  return (
    <div className="profile-page">
      <h1>Perfil de Integrante 3</h1>
      <div className="profile-content">
        <img
          src="/assets/team/integrante3.jpg"
          alt="Integrante 3"
          className="profile-photo"
        />
        <div className="profile-details">
          <h2>María Gómez</h2>
          <p><strong>Rol:</strong> Desarrollador Backend (Datos y Documentación)</p>
          <p><strong>Descripción:</strong> Soy María, estudiante de Técnico Superior en Desarrollo de Software. En este proyecto, gestioné los datos JSON y documenté el desarrollo en la bitácora.</p>
          <p><strong>Contribuciones:</strong></p>
          <ul>
            <li>Creación de la página de datos JSON para mostrar historial de clima.</li>
            <li>Documentación del proyecto en la bitácora.</li>
            <li>Pruebas de integración de la API de OpenWeather.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntegrante3;