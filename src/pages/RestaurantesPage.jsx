import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Restaurantespage.css';
import FastFoodIcon from '../img/comida-rapida.jpg'; // Cambia por tu imagen
import DessertsIcon from '../img/postres.jpg'; // Cambia por tu imagen
import TraditionalFoodIcon from '../img/tipica.jpg'; // Cambia por tu imagen
import FondoPage from '../img/iglesia3.jpg'; // Imagen de fondo para esta página

const subcategories = [
  { name: 'Comida Rápida', image: FastFoodIcon },
  { name: 'Postres', image: DessertsIcon },
  { name: 'Comida Típica', image: TraditionalFoodIcon },
];

const RestaurantesPage = () => {
  return (
    <div className="restaurantes-page">
      {/* Fondo con filtro de desenfoque */}
      <div
        className="restaurantes-background"
        style={{ backgroundImage: `url(${FondoPage})` }}
      ></div>
      <div className="restaurantes-overlay">
        <h1 className="restaurantes-title">RESTAURANTES</h1>
        <div className="restaurantes-container">
          {subcategories.map((subcategory, index) => (
            <div
              className="restaurantes-card"
              key={index}
              style={{ backgroundImage: `url(${subcategory.image})` }}
            >
              <h2>{subcategory.name}</h2>
            </div>
          ))}
        </div>
        <div className="restaurantes-back-button-container">
          <Link to="/categories" className="restaurantes-back-button">
            Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantesPage;
