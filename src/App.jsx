import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantesPage from './pages/RestaurantesPage';
import HospedajesPage from './pages/HospedajesPage';
import CategoriesPage from './pages/CategoriesPage.jsx';
import CentrosRecrePage from './pages/CentrosRecrePage';
import VariosPage from './pages/VariosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/hospedaje" element={<HospedajesPage />} />
      <Route path="/categories/restaurantes" element={<RestaurantesPage />} />
      <Route path="/categories/centros-recreacionales" element={<CentrosRecrePage />} />
      <Route path="/categories/varios" element={<VariosPage />} />
    </Routes>
  );
}

export default App;
