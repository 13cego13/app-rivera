import React from 'react';
import '../styles/HomePage.css';
import 'uikit/dist/css/uikit.min.css';

// Imágenes importadas
import aja from '../img/aja.jpeg';
import iglesia from '../img/iglesia.jpeg';
import termales from '../img/termales.jpeg';

const Carousel = () => {
  return (
    <div 
      className="uk-position-relative uk-visible-toggle uk-light" 
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 3000;"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img 
            src={aja} 
            alt="Aja Rivera" 
            uk-cover="true" 
          />
        </li>
        <li>
          <img 
            src={iglesia} 
            alt="Iglesia Rivera" 
            uk-cover="true" 
          />
        </li>
        <li>
          <img 
            src={termales} 
            alt="Termales Rivera" 
            uk-cover="true" 
          />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
