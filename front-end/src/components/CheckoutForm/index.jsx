import React, { useState, useEffect } from 'react';
/*
import { usePrice } from '../../context/productsProvider';
import Button from '../Button';
import InputField from '../InputField';
*/
export default function CheckoutForm() {
  const [sellerId, setSellerId] = useState();
  /*
  const { totalPrice } = usePrice();
  const [deliveryAddress, setDeliberyAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [status, setStatus] = useState("pendente");
  */
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

  const handleChange = ({ value }) => {
    if (sellerId !== value) setSellerId(value);
  };

  return (
    <form action="/customer/checkout" method="POST">
      <label htmlFor="sellerInput">
        P. Vendedora Responsável
        <select
          id="sellerInput"
          onChange={ ({ target }) => handleChange(target) }
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
    </form>
  );
}
