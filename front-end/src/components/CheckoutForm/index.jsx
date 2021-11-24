import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrice } from '../../context/productsProvider';
import { saleEndPointData } from '../../utils/endPointsData';

export default function CheckoutForm() {
  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliberyAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState();
  const { totalPrice, putItem } = usePrice();
  const status = 'Pendente';
  const [allSellers, setAllSellers] = useState([]);

  const navigate = useNavigate();

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

    // const quantityItem;
    // const idItem = [];
    // putItem.forEach(({ id, quantity}) => {
    //   quantityItem.push(quantity);
    //   idItem.push(id);
    // });

    const itemPut = JSON.stringify([...putItem]);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: token },
      body: JSON.stringify({
        totalPrice,
        sellerId,
        deliveryAddress,
        deliveryNumber,
        status,
        putItem: itemPut,
      }),
    };

    const sale = await fetch(saleEndPointData.endpoint, requestOptions);

    const object = await sale.json();
    navigate(`/customer/orders/${object.id}`);
  };

  return (
    <form onSubmit={ submitForm }>
      <label htmlFor="sellerInput">
        P. Vendedora Responsável
        <select
          id="sellerInput"
          onChange={ ({ target }) => handleChangeSeller(target) }
          data-testid="customer_checkout__select-seller"
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
          data-testid="customer_checkout__input-address"
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
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </form>
  );
}
