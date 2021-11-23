import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartTable from './cartTable';
import DeliveryForm from './DeliveryForm';

export default function Checkout(props) {
  const { totalCart } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className="w-full flex flex-col p-20 min-h-screen">
      <h3 className="text-white text-2xl">Finalizar Pedido</h3>
      <div>
        <CartTable />
        <button
          className="flex"
          type="button"
        >
          Total: R$
          <p
            data-testid="customer_checkout__element-order-total-price"
          >
            { totalCart }
          </p>
        </button>
      </div>
      <h3 className="text-white text-2xl">Detelhes e Endereço para Entrega</h3>
      <div>
        <DeliveryForm setIsDisabled={ setIsDisabled } />
        <button
          data-testid="customer_checkout__button-submit-order"
          className="flex"
          type="button"
          disabled={ isDisabled }
          onClick={ () => console.log('clicou') }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

Checkout.propTypes = {
  totalCart: PropTypes.number.isRequired,
};
