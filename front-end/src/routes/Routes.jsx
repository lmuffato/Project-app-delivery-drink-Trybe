import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Produtos from '../pages/Produtos'
import NotFound from '../pages/notFound';
import PedidoEspecífico from '../pages/PedidoEspecífico';
import CheckoutComprador from '../pages/CheckoutComprador';
import TodosOsPedidos from '../pages/TodosOsPedidos';
import VendaEspecífica from '../pages/VendaEspecífica';
import TodasAsVendas from '../pages/TodasAsVendas';
import Admin from '../pages/Admin';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/register" component={Cadastro}></Route> {/* Comum/Cadastro */}
      <Route exact path='/customer/orders' component={TodosOsPedidos}></Route>{/* Cliente/MeusPedidos */}
      <Route exact path='/customer/products' component={Produtos}></Route> {/* Cliente/Produtos */}
      <Route exact path='/customer/orders/:id' component={PedidoEspecífico}></Route> {/* Cliente/Detalhes do Pedido */}
      <Route exact path='/customer/checkout' component={CheckoutComprador}></Route> {/* Cliente/Checkout */}
      <Route exact path='/seller/orders' component={TodasAsVendas}></Route> {/* P. Vend / Pedidos */}
      <Route exact path='/seller/orders/:id' component={VendaEspecífica}></Route> {/* P. Vend / Detalhes do Pedidos */}
      <Route exact path='/admin/manage' component={Admin}></Route>{/* P. Adm / Gerenciamento */}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route component={ NotFound }></Route>
    </Switch>
  )
}
