import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import UserContext from '../context/UserContext';

function CustomerAddress({ checkout }) {
  const { users, sellers } = useContext(ApiContext);
  const { setSellerId } = useContext(UserContext);
  // const [sellers, setSellers] = useState([]);
  const [sellerSelect, setSellerSelect] = useState(sellers[0].name);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    // const sellerFiltered = users.filter((user) => user.role === 'seller');
    const sellerArray = users.filter((user) => user.name === sellerSelect);
    if (sellerArray.length > 0) {
      setSellerId(sellerArray[0].id);
    }
    // setSellers(sellerFiltered);
  }, [users, sellerSelect, setSellerSelect]);

  const onChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'seller') setSellerSelect(value);
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
  };

  useEffect(() => {
    const addressObject = {
      address, number,
    };
    localStorage.setItem('address', JSON.stringify(addressObject));
  }, [address, number]);

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
          {/* <option value="">Selecione</option> */}
          { sellers.map((seller, index) => (
            <option
              key={ index }
              value={ seller.name }
            >
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
          type="text"
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
        onClick={ checkout }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

CustomerAddress.propTypes = {
  checkout: PropTypes.function,
}.isRequired;

export default CustomerAddress;
