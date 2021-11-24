import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/login';
import Cadastro from '../components/Cadastro';
import CheckoutComprador from '../components/CheckoutComprador';
import AdminManagerUsers from '../pages/AdminManagerUsers';
import NotFound from '../components/NotFound';
import SalesListPage from '../pages/SalesListPage';
import ProdutosClientes from '../pages/ProdutosClientes';
import OrderDetails from '../pages/OrderDetails';

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/register" element={ <Cadastro /> } />
      <Route path="/customer/orders" element={ <SalesListPage /> } />
      <Route path="/customer/products" element={ <ProdutosClientes /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/customer/checkout" element={ <CheckoutComprador /> } />
      <Route path="/seller/orders" element={ <SalesListPage /> } />
      <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
      <Route path="/admin/manage" element={ <AdminManagerUsers /> } />
      <Route element={ <NotFound /> } />
    </Routes>
  );
}
