import React from 'react';
import './BitacoraPage.css';

const BitacoraPage = () => {
  return (
    <div className="bitacora-page">
      <h1>Bitácora del Proyecto</h1>
      <section className="bitacora-section">
        <h2>Integrante 1: Juan Pérez</h2>
        <ul>
          <li><strong>Semana 1:</strong> Diseñé el prototipo de la página de inicio y configuré el sidebar.</li>
          <li><strong>Semana 2:</strong> Integré el carrusel de clima en Home.jsx y ajusté estilos.</li>
          <li><strong>Semana 3:</strong> Completé mi perfil y probé la navegación.</li>
        </ul>
      </section>
      <section className="bitacora-section">
        <h2>Integrante 2: [Tu Nombre]</h2>
        <ul>
          <li><strong>Semana 1:</strong> Configuré el entorno Vite, creé WeatherCarousel, WeatherSearch, y WeatherWidget.</li>
          <li><strong>Semana 2:</strong> Resolví errores en api.js, Search.jsx, JsonDataPage.jsx, y ProfileIntegrante2.css.</li>
          <li><strong>Semana 3:</strong> Integré componentes, completé perfiles, y finalicé JsonDataPage y BitacoraPage.</li>
        </ul>
      </section>
      <section className="bitacora-section">
        <h2>Integrante 3: María Gómez</h2>
        <ul>
          <li><strong>Semana 1:</strong> Investigé formatos JSON para el historial de clima.</li>
          <li><strong>Semana 2:</strong> Creé el archivo weatherHistory.json y diseñé JsonDataPage.</li>
          <li><strong>Semana 3:</strong> Documenté el proyecto en la bitácora y probé la API.</li>
        </ul>
      </section>
    </div>
  );
};

export default BitacoraPage;