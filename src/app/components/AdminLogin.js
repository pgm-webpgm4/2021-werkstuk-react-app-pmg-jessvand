import React from 'react';

import Logo from '../images/eggcellent-logo-txt.svg';

const AdminPage = () => {

  return (
    <div className="admin-login">
      <div className="login-container">
        <img src={Logo} alt="logo" />
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Wachtwoord" />
          <button type="submit" className="button" name="login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;