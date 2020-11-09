import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import * as Routes from '../routes';

const AdminUpdatePage = () => {

  return (
    <div className="page page-admin">

      <div className="container">
        <Link to={Routes.ADMIN} className="button"> <BsArrowLeft /> </Link>
        <h1>Update een product</h1>
        <p>Vul enkel de velden in die je wenst te updaten</p>

        <div className="add-update-product">
          <form>
            <input type="text" placeholder="Product naam" ></input>
            <textarea type="text" placeholder="Product beschrijving" />
            <input type="text" placeholder="Prijs" />
            <input type="text" placeholder="Afbeelding (url)" />
            <button className="button" type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdatePage;