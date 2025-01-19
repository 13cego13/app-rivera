import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CentrosRecrePage.css';
import IconTermales from '../img/Termales2.jpeg'; // Cambia por tu imagen
import IconMiradores from '../img/Miradores.jpeg'; // Cambia por tu imagen
import IconCascadas from '../img/Cascadas.jpeg'; // Cambia por tu imagen
import FondoPage from '../img/iglesia3.jpg'; // Imagen de fondo para esta página

const subcategories = [
  { name: 'Termales', image: IconTermales },
  { name: 'Miradores', image: IconMiradores },
  { name: 'Cascadas', image: IconCascadas },
];

const CentroRecrePage = () => {
  return (
    <div className="centro-recre-page">
      <div
        className="centro-recre-background"
        style={{ backgroundImage: `url(${FondoPage})` }}
      ></div>
      <div className="centro-recre-overlay">
        <h1 className="centro-recre-title">CENTROS RECREACIONALES</h1>
        <div className="centro-recre-container">
          {subcategories.map((subcategory, index) => (
            <div
              className="centro-recre-card"
              key={index}
              style={{ backgroundImage: `url(${subcategory.image})` }}
            >
              <h2>{subcategory.name}</h2>
            </div>
          ))}
        </div>
        <div className="centro-recre-back-button-container">
          <Link to="/categories" className="centro-recre-back-button">
            Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CentroRecrePage;
