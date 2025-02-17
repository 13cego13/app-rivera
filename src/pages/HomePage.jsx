import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Carousel from '../components/Carousel';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  return (
    <div className="homepage">
      <Carousel />
      <div className="homepage-content">
        <h1 className="titulo">DESCUBRE RIVERA</h1>
        <button
          className="explore-button"
          onClick={() => navigate('/categories')} // Usa navigate para cambiar de ruta
        >
          EXPLORAR
        </button>
      </div>
    </div>
  );
};

export default HomePage;
