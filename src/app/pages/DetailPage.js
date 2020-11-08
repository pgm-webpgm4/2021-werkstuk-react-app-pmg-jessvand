import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import { useQuery, gql } from '@apollo/client';

const DetailPage = ({match: {params}}) => {

  const productId = JSON.stringify(params.id);

  const PRODUCT = gql `
    query product {
      product(id: ${productId}) {
        id
        name
        price
        description
        imgUrl
      }
    }
  `;

  

  function addToCart(product) {
    const currentCart = JSON.parse(localStorage.getItem('cart'));

    const newArr = [...currentCart, product];

    localStorage.setItem('cart', JSON.stringify(newArr));
    
  }


  const {loading, error, data} = useQuery(PRODUCT);

  if(loading) return 'Loading...'
  if(error) return `Error: ${error.message}`;


  return (
    <div className="page page-detail">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-12 col-lg-6 col-xl-6 detail-image">
            <img src={data.product.imgUrl} alt="product-img"/>
          </div>

          <div className="container col-12 col-md-12 col-lg-6 col-xl-6 detail-info">
            <h1>{data.product.name}</h1>
            <p>{data.product.description}</p>
            <p className="price">$ {data.product.price}</p>
            <button onClick={() => addToCart(data.product)} className="button">In winkelmandje</button>
          </div>

          <Link to={Routes.PRODUCTS} className="button back-button"> <BsArrowLeft /> </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;