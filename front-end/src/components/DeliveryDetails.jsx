import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router';
import { CartContext } from '../contexts/Cart';

function DeliveryDetails() {
  const [sellersList, setSellersList] = useState(null);
  const [seller, setSeller] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const [allFieldFilled, setAllFieldsFilled] = useState(false);

  const navigate = useNavigate();

  const { cart, total } = useContext(CartContext);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const getAllSellers = async () => {
    const allSellers = await axios.get(
      'http://localhost:3001/sellers',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setSellersList(allSellers.data);
    setSeller(allSellers.data[0]);
  };

  const handleClick = async () => {
    if (address && number) {
      const bodyRequest = {
        sellerId: seller ? seller.id : 2,
        totalPrice: total,
        deliveryAddress: address,
        deliveryNumber: String(number),
        products: cart,
        status: 'Pendente',
      };
      try {
        const pedido = await fetch('http://localhost:3001/orders', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(bodyRequest),
        })
          .then((result) => result.json());
        navigate(`/customer/orders/${pedido.id}`);
      } catch (error) {
        console.log(error);
      }
      setAllFieldsFilled(false);
    } else {
      setAllFieldsFilled(true);
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  // console.log(sellersList);

  const renderSellersOptions = () => (
    <select
      name="sellers-dropdown"
      id="sellers"
      data-testid="customer_checkout__select-seller"
      onChange={ (e) => setSeller(e.target.value) }
      defaultValue={ sellersList[0].name }
    >
      { sellersList
        .map(({ name }, index) => (<option key={ index }>{name}</option>))}
    </select>
  );

  return (
    <form>
      <label htmlFor="sellers">
        {sellersList
          && renderSellersOptions()}
      </label>
      <label htmlFor="adress">
        Endereço
        <input
          type="text"
          id="adress"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setAddress(e.target.value) }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="text"
          id="number"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setNumber(e.target.value) }
        />
      </label>
      { allFieldFilled && <span>Todos os campos precisam ser preenchidos</span> }
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => handleClick() }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default DeliveryDetails;
