import React from 'react';
import { GiTurtle } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

const ProductDetail = (props) => {

  return (
    <div className="page page-detail">
      <div className="container">
        <div className="row">

        <div className="col-12 col-md-12 col-lg-6 col-xl-6 detail-image">
          <img src={props.imgUrl} alt="product-img"/>
        </div>

        <div className="container col-12 col-md-12 col-lg-6 col-xl-6 detail-info">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <p className="price">$ {props.price}</p>
          <p className="button"> In winkelmandje </p>
        </div>

          <Link to={Routes.PRODUCTS} className="button back-button"> <BsArrowLeft /> </Link>



        </div>
      </div>
    </div>
  );
}

export default ProductDetail;