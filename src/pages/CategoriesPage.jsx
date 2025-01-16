import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoriesPage.css';
import IconoRestaurante from '../img/IconoRestaurante.jpeg';
import IconoHospedaje from '../img/IconoHospedaje.jpeg';
import IconoEsparcimiento from '../img/IconoCePar.jpeg';
import IconoVarios from '../img/IconoBares.jpeg';
import FondoPage from '../img/iglesia3.jpg';

const categories = [
  { name: 'Restaurantes', image: IconoRestaurante, route: '/categories/restaurantes' },
  { name: 'Hospedaje', image: IconoHospedaje, route: '/categories/hospedaje' },
  { name: 'Centros Recreacionales', image: IconoEsparcimiento, route: '/categories/centros-recreacionales' },
  { name: 'Varios', image: IconoVarios, route: '/categories/varios' },
];

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <div
        className="background"
        style={{ backgroundImage: `url(${FondoPage})` }}
      ></div>
      <div className="overlay">
        <h1 className="categoriasTitle">CATEGORÍAS</h1>
        <div className="categories-container">
          {categories.map((category, index) => (
            <Link to={category.route} key={index} className="category-link">
              <div
                className="category-card"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <h2>{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="back-button-container">
          <Link to="/" className="back-button">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
