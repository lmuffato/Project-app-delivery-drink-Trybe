import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import CartTable from './cartTable';
import DeliveryForm from './DeliveryForm';

export default function Checkout(props) {
  const { totalCart } = props;
  const url = 'http://localhost:3001';
  const [isDisabled, setIsDisabled] = useState(true);
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const user = JSON.parse(localStorage.getItem('user'));
  const deliveryData = useSelector((state) => state.shoppingCart.deliveryData);
  const history = useHistory();

  const handleClick = async () => {
    const data = {
      sellerId: deliveryData.sellerId,
      totalPrice: totalCart.split(',').join('.'),
      deliveryAddress: deliveryData.address,
      deliveryNumber: deliveryData.number,
      productList: shoppingCart,
    };
    await axios({
      method: 'post',
      url: `${url}/sales`,
      headers: {
        Authorization: user.token,
      },
      data,
    })
      .then((res) => {
        history.push(`/customer/orders/${res.data}`);
      })
      .catch((err) => console.log(err));
  };

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
          onClick={ () => handleClick() }
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
