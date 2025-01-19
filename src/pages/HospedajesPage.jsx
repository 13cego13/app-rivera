import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HospedajesPage.css';
import IconHoteles from '../img/hoteles.jpg'; // Cambia por tu imagen
import IconCabañas from '../img/hoteles-campestres.jpg'; // Cambia por tu imagen
import FondoHospedajes from '../img/iglesia3.jpg'; // Imagen de fondo para esta página

const subcategories = [
  { name: 'Hoteles', image: IconHoteles },
  { name: 'Cabañas', image: IconCabañas },
];

const HospedajesPage = () => {
  return (
    <div className="hospedajes-page">
      <div
        className="hospedajes-background"
        style={{ backgroundImage: `url(${FondoHospedajes})` }}
      ></div>
      <div className="hospedajes-overlay">
        <h1 className="hospedajes-title">HOSPEDAJES</h1>
        <div className="hospedajes-container">
          {subcategories.map((subcategory, index) => (
            <div
              className="hospedajes-card"
              key={index}
              style={{ backgroundImage: `url(${subcategory.image})` }}
            >
              <h2>{subcategory.name}</h2>
            </div>
          ))}
        </div>
        <div className="hospedajes-back-button-container">
          <Link to="/categories" className="hospedajes-back-button">
            Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospedajesPage;
