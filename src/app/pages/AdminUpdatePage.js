import React, { useEffect } from 'react';
import { useQuery , gql } from '@apollo/client';
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

const AdminUpdatePage = () => {

  const {loading, error, data} = useQuery(PRODUCTS, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if(data) {
      console.log(data);
    }
  }, [data]);

  if(loading) return 'Loading products...';
  if(error) return `Error: ${error.message}`;

  return (
    <div className="page page-admin">
      <div className="container">
        <Link to={Routes.ADMIN} className="button"> <BsArrowLeft /> </Link>
        <h1>Kies een product om te updaten</h1>

        <div className="products-container">
          {data.products ?
          data.products.map((product) => {
            return (
              <Link to={Routes.ADMIN_UPDATE_DETAIL.replace(':id', product.id)} key={product.id}>
                <div className="product">
                  <p>{product.id}</p>
                  <p>{product.name}</p>
                </div>
              </Link>
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

export default AdminUpdatePage;