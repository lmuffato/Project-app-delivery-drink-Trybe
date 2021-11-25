import React from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { useDeliveryDetails } from '../../hooks/useDeliveryDetails';
import api from '../../services/api';
import SelectSellers from '../SelectSellers';
import './style.css';

function DeliveryDetails() {
  const {
    sellers,
    address,
    setAddress,
    number,
    setNumber,
    selectedSeller,
    setSelectedSeller } = useDeliveryDetails();
  const history = useHistory();
  const { totalValue } = useCart();

  const formatOrderObj = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const user = JSON.parse(localStorage.getItem('user'));
    const products = cart.map(({ id, quantity }) => ({ id, quantity }));
    const newObj = {
      userId: user.id,
      sellerId: +selectedSeller,
      products,
      totalPrice: totalValue,
      deliveryAddress: address,
      deliveryNumber: number,
    };
    return newObj;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const obj = formatOrderObj();
    const response = await api.postSale(obj, token);
    history.push(`/customer/orders/${response}`);
  };

  if (!sellers) return <h1>Loading</h1>;
  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>

      <form className="deliveryForm" onSubmit={ handleSubmit }>
        <div className="deliveryFormContainer">
          <SelectSellers
            selectedSeller={ selectedSeller }
            setSelectedSeller={ setSelectedSeller }
            sellers={ sellers }
          />

          <label htmlFor="address">
            Endereço
            <input
              id="address"
              type="text"
              value={ address }
              onChange={ (e) => setAddress(e.target.value) }
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              required
              data-testid="customer_checkout__input-address"
            />
          </label>

          <label htmlFor="number">
            Número
            <input
              id="number"
              type="number"
              value={ number }
              onChange={ (e) => setNumber(e.target.value) }
              required
              placeholder="198"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </div>

        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default DeliveryDetails;
