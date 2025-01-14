import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import 'uikit/dist/css/uikit.min.css';

// Imágenes importadas
import aja from '../img/aja.JPG';
import iglesia from '../img/iglesia.jpg';
import termales from '../img/termales.jpeg';
import ajaMobile from '../img/imagen-1-carrusel-celular.jpg';
import iglesiaMobile from '../img/imagen-2-carrusel-celular.jpg';
import termalesMobile from '../img/imagen-3-carrusel-celular.jpg';

const Carousel = () => {
  // Estado para cambiar las imágenes según el tamaño de la pantalla
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Verifica el tamaño inicial
    window.addEventListener('resize', handleResize); // Actualiza al cambiar el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light carussel" 
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 3000;"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img 
            src={isMobile ? ajaMobile : aja} 
            alt="Aja Rivera" 
            uk-cover="true" 
          />
        </li>
        <li>
          <img 
            src={isMobile ? iglesiaMobile : iglesia} 
            alt="Iglesia Rivera" 
            uk-cover="true" 
          />
        </li>
        <li>
          <img 
            src={isMobile ? termalesMobile : termales} 
            alt="Termales Rivera" 
            uk-cover="true" 
          />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;

