import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

import { BsArrowLeft } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

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

const DELETE_PRODUCT = gql `
  mutation deleteProduct ($id: ID) {
    deleteProduct(productId: $id) {
      id
    }
  }
`;

const AdminDeletePage = () => {

  const {loading, error, data, refetch} = useQuery(PRODUCTS, {
    fetchPolicy: "cache-first",
  });

  const [deleteProduct, params] = useMutation(DELETE_PRODUCT);

  useEffect(() => {
    if(params.data) {
      refetch();
    }
  }, [params])

  if(loading) return 'Loading products...';
  if(error) return `Error: ${error.message}`;

  return (
    <div className="page page-admin">

      <div className="container">
        <Link to={Routes.ADMIN} className="button"> <BsArrowLeft /> </Link>
        <h1>Verwijder producten</h1>
        <p>Refresh voor laatste update</p>

        <div className="products-container">
          {data.products ?
          data.products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <button onClick={e => {
                  e.preventDefault();
                  deleteProduct({ variables: {id: product.id}});
                }}>x</button>
              </div>
            )
          })
          :
          <p>Loading...</p>
          }
        </div>
        <button onClick={() => refetch()} className="button refresh"><BiRefresh /></button>
      </div>
    </div>
  );
}

export default AdminDeletePage;