import React, { useEffect } from 'react';

import { useQuery, gql, useLazyQuery } from '@apollo/client';

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

const PRODUCTS_BY_CATEGORY = gql `
  query productsByCategory($category: String){
    productsByCategory(category: $category) {
      id
      name
      price
      category
      imgUrl
    }
  }
`;

const ProductsPage = () => {
  const {loading, error, data} = useQuery(PRODUCTS, {
    fetchPolicy: "cache-first",
  });

  const [getCat, params] = useLazyQuery(PRODUCTS_BY_CATEGORY);

  useEffect(() => {
    if(params.data) {
      console.log(params.data.productsByCategory)
    }
  }, [params])
  
  if(loading) return 'Loading products...';
  if(error) return `Error: ${error.message}`;


  return (
    <div className="page page-products">
      <div className="container">

        <div className="filter-container">
          <ul className="filter-list">
            <li> <button onClick={() => getCat({variables: {category:"amfibie"}})} > <FaFrog className="filter-icon" /> Ambifien</button> </li>
            <li> <button onClick={() => getCat({variables: {category:"mystic"}})}> <GiUnicorn className="filter-icon" /> Mytische Wezens</button> </li>
            <li> <button onClick={() => getCat({variables: {category:"reptielen"}})}> <GiTurtle className="filter-icon" /> Reptielen</button> </li>
            <li> <button onClick={() => getCat({variables: {category:"vogels"}})}> <GiEgyptianBird className="filter-icon" /> Vogels</button> </li>
          </ul>
        </div>

        <div className="container productlist-container">
          <div className="row">
            {params.data ?
              params.data.productsByCategory.map(product => (
                <div className="col-12 col-md-12 col-lg-4 col-xl-4" key={product.id}>
                  <ProductCard id={product.id} imgUrl={product.imgUrl} name={product.name} price={product.price}/>
                </div>
              ))
              :
              data.products.map(product => (
                <div className="col-12 col-md-12 col-lg-4 col-xl-4" key={product.id}>
                  <ProductCard id={product.id} imgUrl={product.imgUrl} name={product.name} price={product.price}/>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;