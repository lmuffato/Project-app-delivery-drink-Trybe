import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Array de test
const sellersArrayTest = [
  { id: 1, name: 'Lewis Hamilton' },
  { id: 2, name: 'Michael Schumacher' },
];

const selectSeller = 'customer_checkout__select-seller';
const inputAddress = 'ustomer_checkout__input-address';
const inputAddressNumber = 'customer_checkout__input-addressNumber';
const buttonSubmitOrder = 'customer_checkout__button-submit-order';

export default function DeliveryDetails() {
  const [sellersList, setSellersList] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [seller, setSeller] = useState('');

  useEffect(() => {
    setSellersList(sellersArrayTest);
    setSeller(sellersArrayTest[0].name);
  }, []);

  useEffect(() => {
    console.log(sellersList);
  }, [sellersList]);

  return (
    <div>
      <span>
        <h3>Detalhes e Endereço para Entrega</h3>
        <label htmlFor={ `${selectSeller}` }>
          <p>P. Vendedora Responsável</p>
          <select
            id={ `${selectSeller}` }
            className={ `${selectSeller}` }
            data-testid={ `${selectSeller}` }
            name="SellersList"
            value={ seller }
            onChange={ (event) => {
              setSeller(event.target.value);
              console.log(seller);
            } }
          >
            {sellersList.map((ele, index) => (
              <option key={ index }>{ele.name}</option>))}
          </select>
        </label>
      </span>
      <span>
        <label htmlFor={ `${inputAddress}` }>
          <p>Endereço</p>
          <input
            data-testid={ `${inputAddress}` }
            type="text"
            className={ `${inputAddress}` }
            id={ `${inputAddress}` }
            placeholder="Avenida Principa, Centro, Vitória"
            onChange={ (e) => {
              setDeliveryAddress(e.target.value); console.log(deliveryAddress);
            } }
            required
          />
        </label>
      </span>
      <span>
        <label htmlFor={ `${inputAddressNumber}` }>
          <p>Número</p>
          <input
            data-testid={ `${inputAddressNumber}` }
            type="text"
            className={ `${inputAddressNumber}` }
            id={ `${inputAddressNumber}` }
            placeholder="123"
            onChange={ (e) => {
              setAddressNumber(e.target.value);
              console.log(addressNumber);
            } }
            required
          />
        </label>
      </span>
      <div>
        <Link
          to="/customer/finished"
          data-testid={ `${buttonSubmitOrder}` }
          className={ `${buttonSubmitOrder}` }
        >
          <button type="button">FINALIZAR PEDIDO</button>
        </Link>
      </div>
    </div>
  );
}
