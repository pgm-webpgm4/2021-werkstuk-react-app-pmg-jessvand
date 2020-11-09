import React from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../routes';

import { FiFilePlus, FiEdit, FiFileMinus} from 'react-icons/fi';

// import { AdminLogin } from '../components';

const AdminPage = () => {

  return (
    <div className="page page-admin">
      {/* <AdminLogin /> */}

      <div className="container">
        <h1>Welkom Admin</h1>
        <div className="row actions-container">
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <Link to={Routes.ADMIN_ADD} className="action">
              <p>Product toevoegen</p>
              <FiFilePlus className="icon"/>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <Link to={Routes.ADMIN_UPDATE} className="action">
              <p>Product updaten</p>
              <FiEdit className="icon"/>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <Link to={Routes.ADMIN_DELETE} className="action">
              <p>Product verwijderen</p>
              <FiFileMinus className="icon"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;