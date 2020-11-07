import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

const ProductCard = (props) => {

  return (
    
    <div className="col-12 col-md-12 col-lg-4 col-xl-4">
      <Link to={Routes.PRODUCT_DETAIL} className="product-card-link">
        <div className="product-card">
          <div className="product-card-image">
            <img src="https://cdn.pixabay.com/photo/2017/12/29/19/39/nature-3048445_960_720.jpg" alt="product-img"/>
          </div>
          <div className="product-card-info">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );

}

export default ProductCard;