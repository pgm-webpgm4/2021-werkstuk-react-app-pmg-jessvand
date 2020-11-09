import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { BsArrowLeft } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import * as Routes from '../routes';

const PRODUCTS = gql `
  {
    products {
      id
      name
    }
  }
`;

const AdminDeletePage = () => {

  const {loading, error, data} = useQuery(PRODUCTS, {
    fetchPolicy: "cache-first",
  });

  

  if(loading) return 'Loading products...';
  if(error) return `Error: ${error.message}`;

  return (
    <div className="page page-admin">

      <div className="container">
        <Link to={Routes.ADMIN} className="button"> <BsArrowLeft /> </Link>
        <h1>Verwijder producten</h1>

        <div className="products-container">
          {data.products ?
          data.products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <button>x</button>
              </div>
            )
          })
          :
          <p>Loading...</p>
          }
        </div>
      </div>
    </div>
  );
}

export default AdminDeletePage;