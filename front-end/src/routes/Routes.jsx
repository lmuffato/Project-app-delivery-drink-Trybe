import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro';
import Produtos from '../pages/Produtos';
import NotFound from '../pages/notFound';
import PedidoEspecífico from '../pages/PedidoEspecífico';
import CheckoutComprador from '../pages/CheckoutComprador';
import TodosOsPedidos from '../pages/TodosOsPedidos';
import VendaEspecífica from '../pages/VendaEspecífica';
import TodasAsVendas from '../pages/TodasAsVendas';
import Admin from '../pages/Admin';

// const pathway = {
//   login: '/login',
//   customer: '/customer/products',
//   administrator: '/admin/manage',
//   seller: '/seller/orders',
// };

export default function Routes() {
  // function rightRedirect() {
  //   const user = localStorage.getItem('user');

  //   if (user) {
  //     console.log(user);
  //     const roleParse = JSON.parse(user).role;
  //     return (<Redirect to={ pathway[roleParse] } />);
  //   }
  //   return (<Redirect to="/login" />);
  // }

  return (
    <Switch>
      <Route exact path="/register" component={ Cadastro } />
      {' '}
      {/* Comum/Cadastro */}
      <Route exact path="/customer/orders" component={ TodosOsPedidos } />
      {/* Cliente/MeusPedidos */}
      <Route exact path="/customer/products" component={ Produtos } />
      {' '}
      {/* Cliente/Produtos */}
      <Route exact path="/customer/orders/:id" component={ PedidoEspecífico } />
      {' '}
      {/* Cliente/Detalhes do Pedido */}
      <Route exact path="/customer/checkout" component={ CheckoutComprador } />
      {' '}
      {/* Cliente/Checkout */}
      <Route exact path="/seller/orders" component={ TodasAsVendas } />
      {' '}
      {/* P. Vend / Pedidos */}
      <Route exact path="/seller/orders/:id" component={ VendaEspecífica } />
      {' '}
      {/* P. Vend / Detalhes do Pedidos */}
      <Route exact path="/admin/manage" component={ Admin } />
      {/* P. Adm / Gerenciamento */}
      <Route exact path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      {/* <Route path="/">{rightRedirect() || <Redirect to="/login" />}</Route> */}
      <Route component={ NotFound } />
    </Switch>
  );
}
