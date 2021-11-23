import React, { useState, useEffect } from 'react';
import { usePrice } from '../../context/productsProvider';
import { saleEndPointData } from '../../utils/endPointsData';

export default function CheckoutForm() {
  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliberyAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);
  const { totalPrice } = usePrice();
  const status = 'pendente';
  const [allSellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((users) => {
        const sellers = users.filter(({ role }) => (
          role === 'administrator' || role === 'seller'
        ));
        setAllSellers(sellers);
        setSellerId(sellers[0].id);
      });
  }, []);

  const handleChangeSeller = ({ value }) => {
    if (sellerId !== value) setSellerId(value);
  };

  const handleChange = ({ value }, setStateCallback) => {
    setStateCallback(value);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const { token } = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: token },
      body: JSON.stringify({
        totalPrice,
        sellerId,
        deliveryAddress,
        deliveryNumber,
        status,
      }),
    };

    await fetch(saleEndPointData.endpoint, requestOptions);
  };

  return (
    <form onSubmit={ submitForm }>
      <label htmlFor="sellerInput">
        P. Vendedora Responsável
        <select
          id="sellerInput"
          onChange={ ({ target }) => handleChangeSeller(target) }
        >
          { allSellers.map((seller) => (
            <option
              key={ seller.id }
              value={ seller.id }
            >
              { seller.name }
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="addressInput">
        Endereço
        <input
          type="text"
          name="addressInput"
          id="addressInput"
          value={ deliveryAddress }
          onChange={ ({ target }) => handleChange(target, setDeliberyAddress) }
        />
      </label>
      <label htmlFor="numberInput">
        Número
        <input
          type="number"
          name="numberInput"
          id="numberInput"
          value={ deliveryNumber }
          onChange={ ({ target }) => handleChange(target, setDeliveryNumber) }
        />
      </label>
      <button
        type="submit"
      >
        Finalizar Pedido
      </button>
    </form>
  );
}
