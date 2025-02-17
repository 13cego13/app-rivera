import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VariosPage.css';
import BarIcon from '../img/bares.jpeg'; // Cambia por tu imagen
import GymIcon from '../img/Gym.jpeg'; // Cambia por tu imagen
import DiscotecaIcon from '../img/Discoteca.jpeg'; // Cambia por tu imagen
import FondoPage from '../img/iglesia3.jpg'; // Imagen de fondo para esta página

const subcategories = [
  { name: 'Bares', image: BarIcon },
  { name: 'Gimnacios', image: GymIcon },
  { name: 'Discotecas', image: DiscotecaIcon },
];

const VariosPage = () => {
  return (
    <div className="varios-page">
      {/* Fondo con filtro de desenfoque */}
      <div
        className="varios-background"
        style={{ backgroundImage: `url(${FondoPage})` }}
      ></div>
      <div className="varios-overlay">
        <h1 className="varios-title">VARIOS</h1>
        <div className="varios-container">
          {subcategories.map((subcategory, index) => (
            <div
              className="varios-card"
              key={index}
              style={{ backgroundImage: `url(${subcategory.image})` }}
            >
              <h2>{subcategory.name}</h2>
            </div>
          ))}
        </div>
        <div className="varios-back-button-container">
          <Link to="/categories" className="varios-back-button">
            Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VariosPage;
