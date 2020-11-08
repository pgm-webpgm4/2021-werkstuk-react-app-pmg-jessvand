import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { AdminPage, CartPage, DetailPage, HomePage, PaymentPage, ProductsPage } from './pages';
import * as Routes from './routes';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const App = () => {

  const client = new ApolloClient({
    uri: 'http://localhost:5050',
    cache: new InMemoryCache()
  });

  localStorage.setItem('cart', '[]');

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={Routes.HOME} component={HomePage} />
            <Route exact path={Routes.PRODUCTS} component={ProductsPage} />
            <Route exact path={Routes.PRODUCT_DETAIL} component={DetailPage} />
            <Route exact path={Routes.CART} component={CartPage} />
            <Route exact path={Routes.ADMIN} component={AdminPage} />
            <Route exact path={Routes.PAYMENT} component={PaymentPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
