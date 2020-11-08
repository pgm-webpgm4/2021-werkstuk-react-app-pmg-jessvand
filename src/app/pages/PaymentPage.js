import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../routes';
import { BsCheckCircle } from 'react-icons/bs';

const PaymentPage = () => {

  return (
    <div className="page page-payment">
      <div className="container payment-container">
        <h1>Bedankt voor uw aankoop!</h1>
        <p><BsCheckCircle /></p>
        <Link to={Routes.HOME} className="button">Home</Link>
      </div>
    </div>
  );
}

export default PaymentPage;