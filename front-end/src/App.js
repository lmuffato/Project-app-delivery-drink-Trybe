import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Orders from './pages/Orders';
import CartProvider from './provider/Cart';
import Checkout from './pages/Checkout';

// rotas
import paths from './routesPaths/paths';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ paths.routeMain } exact>
          <Redirect to={ paths.routeLogin } />
        </Route>
        <Route path={ paths.routeLogin } exact component={ Login } />
        <Route path={ paths.routeRegister } exact component={ Register } />
        <Route path={ paths.routeOrders } exact component={ Orders } />
        <Route path={ paths.routeCheckout } exact component={ Checkout } />
        <CartProvider>
          <Route path={ paths.routeProducts } exact component={ Products } />
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
