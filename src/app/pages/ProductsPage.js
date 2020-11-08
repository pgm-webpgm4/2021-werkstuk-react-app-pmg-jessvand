import React from 'react';

import { useQuery, gql } from '@apollo/client';

// import { ProductCard } from '../components';
import { GiEgyptianBird, GiTurtle, GiUnicorn } from 'react-icons/gi';
import { FaFrog } from 'react-icons/fa';
import { ProductCard } from '../components';

const PRODUCTS = gql `
  {
    products {
      id
      name
      price
      category
      imgUrl
    }
  }
`;

// const PRODUCTS_BY_CATEGORY = gql `
//   query productsByCategory($category: String){
//     productsByCategory(category: $category) {
//       id
//       name
//       price
//       category
//       imgUrl
//     }
//   }
// `;

const ProductsPage = () => {
  const {loading, error, data} = useQuery(PRODUCTS, {
    fetchPolicy: "cache-first",
  });
  
  if(loading) return 'Loading products...';
  if(error) return `Error: ${error.message}`;


  return (
    <div className="page page-products">
      <div className="container">

        <div className="filter-container">
          <ul className="filter-list">
            <li> <button > Alle Producten</button> </li>
            <li> <button > <FaFrog className="filter-icon" /> Ambifien</button> </li>
            <li> <button > <GiUnicorn className="filter-icon" /> Mytische Wezens</button> </li>
            <li> <button > <GiTurtle className="filter-icon" /> Reptielen</button> </li>
            <li> <button > <GiEgyptianBird className="filter-icon" /> Vogels</button> </li>
          </ul>
        </div>

        <div className="container productlist-container">
          <div className="row">
            {data.products.map(product => (
              <div className="col-12 col-md-12 col-lg-4 col-xl-4" key={product.id}>
                <ProductCard id={product.id} imgUrl={product.imgUrl} name={product.name} price={product.price}/>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;