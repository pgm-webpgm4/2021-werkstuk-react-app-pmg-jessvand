import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AdminPage, CartPage, DetailPage, HomePage, ProductsPage } from './pages';
import { Navbar } from './components';

import * as Routes from './routes';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={Routes.HOME} component={HomePage} />
          <Route exact path={Routes.PRODUCTS} component={ProductsPage} />
          <Route exact path={Routes.PRODUCT_DETAIL} component={DetailPage} />
          <Route exact path={Routes.CART} component={CartPage} />
          <Route exact path={Routes.ADMIN} component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
