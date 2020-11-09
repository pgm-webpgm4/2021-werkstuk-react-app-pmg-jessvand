import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import LogoText from '../images/eggcellent-logo-txt.svg';
import { FaFacebookSquare, FaShoppingCart } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container-fluid" >
        <div className="row nav-row" >
          <div className="col-12 col-md-12 col-lg-4 col-xl-4 nav-socials" >
            <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare /> </a>
            <a href="https://www.instagram.com/madebygdm/" target="_blank" rel="noopener noreferrer"> <GrInstagram /> </a>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4 nav-logo" >
            <Link to={Routes.HOME}>
              <img src={LogoText} alt="logo"/>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4 nav-cart" >
            <Link to={Routes.ADMIN}>Admin</Link>
            <Link to={Routes.PRODUCTS}> Producten </Link>
            <Link className="cart" to={Routes.CART}> <FaShoppingCart /> </Link>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Navbar;