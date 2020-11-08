import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../routes';

import { ProductCard } from '../components';

const CartPage = () => {

  const cartContent = JSON.parse(localStorage.getItem('cart'));

  function clearStorage () {
    localStorage.removeItem('cart');
  }

  return (
    <div className="page page-cart">
      <div className="container">
        <h2>Winkelmandje</h2>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 col-xl-9">
            <div className="row">
              {cartContent ? 
                cartContent.map(item => {
                  return (
                  <div className="col-12 col-md-12 col-lg-4 col-xl-4" key={item.id}>
                    <ProductCard name={item.name} price={item.price} imgUrl={item.imgUrl}/>
                  </div>
                )})
                :
                <p> </p>
              }
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3 col-xl-3 price-list">
            { cartContent ?
                cartContent.map(item => {
                  return (
                  <div className="cart-item" key={item.id}>
                    <p>{item.name}</p>
                    <p>€ {item.price}</p>
                  </div>
                  )
                })
              :
                <p><strong>Nog geen artikelen in jouw winkelmandje </strong></p>
            }
            <Link to={Routes.PRODUCTS}>Verder winkelen</Link>
            <Link onClick={() => clearStorage()} to={Routes.PAYMENT}>Afrekenen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;