import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import { BsArrowLeft } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import * as Routes from '../routes';

const AdminAddPage = () => {

  const ADD_PRODUCT = gql `
    mutation addProduct ($name: String, $description: String, $price: String, $imgUrl: String, $category: String){
      addProduct(product: {
        name: $name,
        description: $description,
        price: $price,
        imgUrl: $imgUrl,
        category: $category}) {
        id
      }
    }
  `;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [addProduct, { data }] = useMutation(ADD_PRODUCT);

  useEffect(() => {
    if(data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="page page-admin">

      <div className="container">
        <Link to={Routes.ADMIN} className="button"> <BsArrowLeft /> </Link>
        <h1>Voeg een product toe</h1>

        <div className="add-update-product">
          <form
            onSubmit={e => {
              e.preventDefault();
              addProduct({ variables: {name: name, description: description, price: price, imgUrl: imgUrl, category: category} });
            }}>
            <input onChange={e => setName(e.target.value)} type="text" placeholder="Product naam" ></input>
            <textarea onChange={e => setDescription(e.target.value)} type="text" placeholder="Product beschrijving" />
            <input onChange={e => setPrice(e.target.value)} type="text" placeholder="Prijs" />
            <input onChange={e => setImgUrl(e.target.value)} type="text" placeholder="Afbeelding (url)" />
            <input onChange={e => setCategory(e.target.value)}type="text" placeholder="Categorie" />
            <button className="button" type="submit">Voeg product toe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAddPage;