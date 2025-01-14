import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../styles/CategoriesPage.css';

const categories = ['Turismo', 'Gastronomía', 'Artesanías', 'Cultura', 'Naturaleza'];

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <h1>CATEGORIAS</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <h2>{category}</h2>
          </div>
        ))}
      </div>
      <div className="back-button-container">
        {/* Botón para volver a la página principal */}
        <Link to="/" className="back-button">
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default CategoriesPage;

