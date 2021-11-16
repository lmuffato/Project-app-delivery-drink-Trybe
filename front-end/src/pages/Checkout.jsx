import React from 'react';
import '../styles/Checkout.css';
import { useLocation } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/NavBar';
import CheckoutDetails from '../components/CheckoutDetails';

export default function Checkout() {
  const location = useLocation();

  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };
  return (
    <>
      { renderNavBar() }
      <div className="checkout-order">
        <h3 className="checkout-title">Finalizar Pedido</h3>
        <CheckoutTable className="checkout-table" />
        <h2 className="checkout-total">
          <span data-testid="customer_checkout__element-order-total-price">
            Total: R$ 28,46
          </span>
        </h2>
      </div>
      <div className="checkout-details">
        <h3 className="checkout-title">Detalhes e Endereço para Entrega</h3>
        <CheckoutDetails />
      </div>
    </>
  );
}
