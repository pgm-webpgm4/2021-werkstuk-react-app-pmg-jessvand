import React from 'react';

import { useQuery, gql } from '@apollo/client';
import { ProductDetail } from '../components';

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

const {loading, error, data} = useQuery(PRODUCT);

if(loading) return 'Loading...'
if(error) return `Error: ${error.message}`;


  return (
    <div className="page page-detail">
      <ProductDetail imgUrl={data.product.imgUrl} name={data.product.name} description={data.product.description} price={data.product.price}/>
    </div>
  );
}

export default DetailPage;