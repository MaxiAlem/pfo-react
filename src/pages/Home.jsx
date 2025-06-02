import React from 'react';
import WeatherCarousel from '../components/Weather/WeatherCarousel.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Weather App</h1>
        <p>Explora el clima global, busca ciudades, y mantente informado con nuestro widget en tiempo real.</p>
      </header>
      <section className="carousel-section">
        <WeatherCarousel />
      </section>
    </div>
  );
};

export default Home;