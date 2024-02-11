import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

const Home = () => {
  return (
    <div className="page">
      <div className="content-wrapper">
        <img src={image1} alt="1" className="home-image" />
        <img src={image2} alt="2" className="home-image" />
        <img src={image3} alt="3" className="home-image" />
        <img src={image4} alt="4" className="home-image" />
        <div className="try-it-button">
          <Link to="/demo">
            <button>Try It</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;