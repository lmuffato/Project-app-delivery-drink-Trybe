import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSellers from '../../services/fetchSellers';
import fetchSale from '../../services/fetchSale';

export default function OrderForm() {
  const { user, products } = useContext(ContextDeliveryApp);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  const history = useHistory();

  const getSellers = async () => {
    const { token } = user;
    const sellersGotten = await fetchSellers(token);
    const allSellers = await sellersGotten.sellers;
    setSellers(allSellers);
    setSelectedSeller(allSellers[0].name);
  };

  const handleSelect = (e) => {
    setSelectedSeller(e.target.value);
  };

  const handleClick = async () => {
    const cartProducts = products.filter((product) => product.quantity > 0);
    const customer = user;
    const seller = sellers.find((s) => s.name === selectedSeller);
    const address = { street, number };
    const response = await fetchSale(customer, seller, cartProducts, address);
    console.log(response);
    if (response.sale) history.push(`/customer/orders/${response.sale.id}`);
  };

  useEffect(() => {
    getSellers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [sellers]);

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <select
        name="sellers"
        value={ selectedSeller }
        onChange={ handleSelect }
        data-testid="customer_checkout__select-seller"
      >
        P. Vendedora Responsável
        { sellers && sellers.map((seller) => (
          <option value={ seller.name } key={ seller.id }>{ seller.name }</option>
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
        />
      </label>
      <button
        onClick={ handleClick }
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
