import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <div className="homepage-content">
        <h1>Descubre Rivera, Huila</h1>
        <button className="explore-button" onClick={() => window.location.href = '/categories'}>
          Explorar Rivera
        </button>
      </div>
    </div>
  );
};

export default HomePage;
