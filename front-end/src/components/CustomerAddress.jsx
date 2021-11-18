import React, { useContext, useState, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

function CustomerAddress() {
  const { users } = useContext(ApiContext);
  const [sellers, setSellers] = useState([]);
  const [sellerSelect, setSellerSelect] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const teste = users.filter((user) => user.role === 'seller');
    console.log(teste);
    setSellers(teste);
  }, [users, sellerSelect]);

  const onChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'seller') setSellerSelect(value);
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <div>
      Detalhes e Endereço para entrega
      <label htmlFor="seller-select">
        P. Vendedora Responsável
        <select
          name="seller"
          data-testid="customer_checkout__select-seller"
          id="seller-select"
          onChange={ onChange }
        >
          <option value="">Selecione</option>
          { sellers.map((seller, index) => (
            <option key={ index } value={ seller.name }>
              { seller.name }
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          id="address"
          name="address"
          value={ address }
          onChange={ onChange }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="number"
          data-testid="customer_checkout__input-addressNumber"
          id="number"
          name="number"
          value={ number }
          onChange={ onChange }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default CustomerAddress;
