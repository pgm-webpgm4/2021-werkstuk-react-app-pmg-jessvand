import React from 'react';
import { GiTurtle } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, Route } from 'react-router-dom';

import * as Routes from '../routes';

const DetailPage = () => {

  return (
    <div className="page page-detail">
      <div className="container">
        <div className="row">

        <div className="col-12 col-md-12 col-lg-6 col-xl-6 detail-image">
          <img src="https://cdn.pixabay.com/photo/2017/12/29/19/39/nature-3048445_960_720.jpg" alt="product-img"/>
        </div>

        <div className="container col-12 col-md-12 col-lg-6 col-xl-6 detail-info">
          <h1>Schildpad Ei</h1>
          <p>Schildpad eieren zijn ovaal tot kogelrond.Ze hebben een witgele kleur. De eieren van alle soorten hebben een poreuze schaal zodat zuurstof kan worden onttrokken aan de omgeving en water kan worden uitgescheiden.</p>
          <p><strong> <GiTurtle className="icon"/> Reptielen </strong></p>
          <p className="price">$ 15,00</p>
          <p className="button"> In winkelmandje </p>
        </div>

          <Link to={Routes.PRODUCTS} className="button back-button"> <BsArrowLeft /> </Link>



        </div>
      </div>
    </div>
  );
}

export default DetailPage;