import React from 'react';

import { ProductCard } from '../components';

import { GiEgyptianBird, GiTurtle, GiUnicorn } from 'react-icons/gi';
import { FaFrog } from 'react-icons/fa';

const ProductsPage = () => {

  return (
    <div className="page page-products">
      <div className="container">

        <div className="filter-container">
          <ul className="filter-list">
            <li> <button> <FaFrog className="filter-icon" /> Ambifien</button> </li>
            <li> <button> <GiUnicorn className="filter-icon" /> Mytisch</button> </li>
            <li> <button> <GiTurtle className="filter-icon" /> Reptielen</button> </li>
            <li> <button> <GiEgyptianBird className="filter-icon" />Vogels</button> </li>
          </ul>
        </div>

        <div className="container productlist-container">
          <div className="row product-row">
            <ProductCard name="Schildpad Ei" price="$15,00"/>
            <ProductCard name="Kippen Ei" price="$5,00"/>
            <ProductCard name="Draken Ei" price="$105,00"/>
            <ProductCard name="Bruh Ei" price="$24,00"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;