import React from 'react';
import '../styles/CategoriesPage.css';

const categories = ['Turismo', 'Gastronomía', 'Artesanías', 'Cultura', 'Naturaleza'];

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <h1>Categorías de Rivera</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <h2>{category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
