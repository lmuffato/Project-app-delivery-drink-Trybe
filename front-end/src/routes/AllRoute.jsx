import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/login';
import Cadastro from '../components/Cadastro';
import Pedidos from '../components/Pedidos';
import PedidoDetalhes from '../components/PedidoDetalhes';
import CheckoutComprador from '../components/CheckoutComprador';
import Vendas from '../components/Vendas';
import VendaDetalhes from '../components/VendaDetalhes';
import AdminManagerUsers from '../pages/AdminManagerUsers';
import NotFound from '../components/NotFound';
import ProdutosClientes from '../pages/ProdutosClientes';

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/register" element={ <Cadastro /> } />
      <Route path="/customer/orders" element={ <Pedidos /> } />
      <Route path="/customer/products" element={ <ProdutosClientes /> } />
      <Route path="/customer/orders/:id" element={ <PedidoDetalhes /> } />
      <Route path="/customer/checkout" element={ <CheckoutComprador /> } />
      <Route path="/seller/orders" element={ <Vendas /> } />
      <Route path="/seller/orders/:id" element={ <VendaDetalhes /> } />
      <Route path="/admin/manage" element={ <AdminManagerUsers /> } />
      <Route element={ <NotFound /> } />
    </Routes>
  );
}
