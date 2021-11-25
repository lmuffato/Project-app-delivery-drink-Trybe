import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { CartContext } from '../contexts/Cart';

function DeliveryDetails() {
  const [sellersList, setSellersList] = useState(null);
  const [seller, setSeller] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const [allFieldFilled, setAllFieldsFilled] = useState(false);

  const { cart, total } = useContext(CartContext);

  console.log(cart);

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
    if (seller && address && number) {
      const bodyRequest = {
        sellerId: seller.id,
        totalPrice: total,
        deliveryAddress: address,
        deliveryNumber: number,
        products: cart,
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
        console.log(pedido);
      } catch (error) {
        console.log(error);
      }
      // navigate('/customer/checkout');
      setAllFieldsFilled(false);
    } else {
      setAllFieldsFilled(true);
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <form>
      <label htmlFor="sellers">
        <select
          name="sellers-dropdown"
          id="sellers"
          data-testid="customer_checkout__select-seller"
          onChange={ setSeller }
        >
          { sellersList && sellersList
            .map(({ name }, index) => (<option key={ index }>{name}</option>))}
        </select>
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
