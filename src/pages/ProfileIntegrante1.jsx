import React from 'react';
import './ProfileIntegrante1.css';

const ProfileIntegrante1 = () => {
  return (
    <div className="profile-page">
      <h1>Perfil de Integrante 1</h1>
      <div className="profile-content">
        <img
          src="/assets/team/integrante1.jpg"
          alt="Integrante 1"
          className="profile-photo"
        />
        <div className="profile-details">
          <h2>Juan Pérez</h2>
          <p><strong>Rol:</strong> Desarrollador Frontend (Estructura y Diseño)</p>
          <p><strong>Descripción:</strong> Soy Juan, estudiante de Técnico Superior en Desarrollo de Software. En este proyecto, diseñé la página de inicio y configuré la navegación principal, incluyendo el sidebar.</p>
          <p><strong>Contribuciones:</strong></p>
          <ul>
            <li>Desarrollo de la página de inicio con diseño responsivo.</li>
            <li>Implementación del sidebar con navegación dinámica.</li>
            <li>Integración de componentes de clima en la página principal.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntegrante1;