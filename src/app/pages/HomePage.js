import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import Hero from '../images/hero.jpg';

const HomePage = () => {

  return (
    <div className="page page-home">
      <div className="hero-container">
        <img src={Hero} alt="hero-img"/>
      </div>
      <div className="content-container">
        <Link to={Routes.PRODUCTS} className="button-opacity">
          shop now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;