import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../routes';

import { ProductCard } from '../components';

const CartPage = () => {

  return (
    <div className="page page-cart">
      <div className="container">
        <h2>Winkelmandje</h2>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 col-xl-9">
            <div className="row">
              <ProductCard name="Draken Ei" price="$ 250,00"/>
              <ProductCard name="Meeuwen Ei" price="$ 8,00"/>
              <ProductCard name="Kippen Ei" price="$ 5,00"/>
              <ProductCard name="Schildpad Ei" price="$ 8,00"/>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3 col-xl-3">
            <h2>Total Price here</h2>
            <Link to={Routes.PRODUCTS} className="button">Verder winkelen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;