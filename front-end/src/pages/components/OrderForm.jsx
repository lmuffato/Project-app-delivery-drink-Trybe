import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSellers from '../../services/fetchSellers';
import fetchSale from '../../services/fetchSale';

export default function OrderForm() {
  const { user, products } = useContext(ContextDeliveryApp);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(0);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  const history = useHistory();

  const getSellers = async () => {
    const { token } = user;
    const sellersGotten = await fetchSellers(token);
    const allSellers = await sellersGotten.sellers;
    setSellers(allSellers);
    setSelectedSeller(allSellers[0].id);
  };

  const handleSelect = (e) => {
    setSelectedSeller(e.target.value);
  };

  const handleClick = async () => {
    const cartProducts = products.filter((product) => product.quantity > 0);
    const customer = user;
    const sellerId = selectedSeller;
    const address = { street, number };
    try {
      const response = await fetchSale(customer, sellerId, cartProducts, address);
      if (response.data.sale) {
        history.push(`/customer/orders/${response.data.sale.id}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSellers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [sellers]);

  return (
    <div className="checkout-details-title">
      <h2>Detalhes e Endereço para Entrega</h2>
      <select
        name="sellers"
        value={ selectedSeller }
        onChange={ handleSelect }
        data-testid="customer_checkout__select-seller"
        className="checkout-select"
      >
        P. Vendedora Responsável
        { sellers && sellers.map((seller) => (
          <option value={ seller.id } key={ seller.id }>{ seller.name }</option>
        ))}
      </select>
      <label htmlFor="endereco">
        Endereço
        <input
          id="endereco"
          type="text"
          value={ street }
          placeHolder="Travessa Terceira da Castanheira, Bairo Muruci"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setStreet(e.target.value) }
          className="checkout-address-input"
        />
      </label>
      <label htmlFor="numero">
        Número
        <input
          id="numero"
          type="text"
          value={ number }
          placeHolder="198"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setNumber(e.target.value) }
          className="checkout-number-input"
        />
      </label>
      <button
        onClick={ handleClick }
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        className="checkout-order-btn"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
