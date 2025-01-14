import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <div className="homepage-content">
        <h1 className='titulo' >DESCUBRE RIVERA</h1>
        <button className="explore-button" onClick={() => window.location.href = '/categories'}>
          EXPLORAR
        </button>
      </div>
    </div>
  );
};

export default HomePage;
