import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';
import { BsArrowLeft } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import * as Routes from '../routes';

const UpdateProduct = ({match: {params}}) => {

  const productId = JSON.stringify(params.id);

  // const PRODUCT = gql `
  //   query product {
  //     product(id: ${productId}) {
  //       id
  //       name
  //       price
  //       description
  //       imgUrl
  //     }
  //   }
  // `;

  const UPDATE_PRODUCT = gql `
  mutation editProduct ($name: String, $description: String, $price: String, $imgUrl: String, $category: String){
    editProduct(productId: ${productId},
      productData: {
      name: $name,
      description: $description,
      price: $price,
      imgUrl: $imgUrl,
      category: $category}) {
      id
      }
    }
  `;

  // const {loading, error, data} = useQuery(PRODUCT);

  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [updateProduct, updatedProduct] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {
    if(updatedProduct) {
      console.log(updatedProduct);
    }
  }, [updatedProduct]);

  // if(loading) return 'Loading...'
  // if(error) return `Error: ${error.message}`;

  return (
    <div className="page page-update">
      <div className="container">
        <Link to={Routes.ADMIN_UPDATE} className="button"> <BsArrowLeft /> </Link>
        <h1>Update een product</h1>

        <div className="add-update-product">
          <form
            onSubmit={e => {
              e.preventDefault();
              updateProduct({ variables: { name: name, description: description, price: price, imgUrl: imgUrl, category: category}})
            }}>
            <p>{productId}</p>
            <input onChange={e => setName(e.target.value)} type="text" placeholder="Product naam"></input>
            <textarea onChange={e => setDescription(e.target.value)}type="text" placeholder="Product beschrijving"/>
            <input onChange={e => setPrice(e.target.value)}type="text" placeholder="Prijs"/>
            <input onChange={e => setImgUrl(e.target.value)}type="text" placeholder="Afbeelding (url)" />
            <input onChange={e => setCategory(e.target.value)}type="text" placeholder="Categorie" />
            <button className="button" type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;