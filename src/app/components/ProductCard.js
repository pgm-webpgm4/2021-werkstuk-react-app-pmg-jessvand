import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

const ProductCard = (props) => {

  return (
    
    
    <Link to={`/products/${props.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-card-image">
          <img src={props.imgUrl} alt="product-img"/>
        </div>
        <div className="product-card-info">
          <h3>{props.name}</h3>
          <p>€ {props.price}</p>
        </div>
      </div>
    </Link>
  );

}

export default ProductCard;