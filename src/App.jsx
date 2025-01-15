import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantesPage from './pages/RestaurantesPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/restaurantes" element={<RestaurantesPage />} />
    </Routes>
  );
}

export default App;
