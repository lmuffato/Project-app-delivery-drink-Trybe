import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addAddress } from '../redux/cartSlice';

export default function DeliveryForm(props) {
  const { setIsDisabled } = props;
  const url = 'http://localhost:3001';
  const user = JSON.parse(localStorage.getItem('user'));
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [seller, setSeller] = useState();
  const dispatch = useDispatch();

  const getSellers = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/users/seller`,
        headers: {
          Authorization: user.token,
        },
      })
        .then((res) => {
          setSellers(res.data);
        })
        .catch((err) => console.log(err));
    }, [setSellers, user],
  );

  useEffect(() => {
    getSellers();
  }, [getSellers]);

  useEffect(() => {
    const newData = { sellerId: seller, number, address };
    dispatch(addAddress({ newData }));
  }, [seller, number, address, dispatch]);

  useEffect(() => {
    if (seller && number && address) {
      return setIsDisabled(false);
    }
    setIsDisabled(true);
  }, [seller, number, address, setIsDisabled]);

  return (
    <form className="flex">
      <label
        className="flex flex-col m-5"
        htmlFor="seller"
      >
        P. Vendedora Responsável
        <select
          name="seller"
          id="seller"
          data-testid="customer_checkout__select-seller"
          value={ seller }
          onChange={ (event) => setSeller(event.target.value) }
        >
          <option>Selecione</option>
          {
            sellers.map((item, index) => (
              <option key={ index } value={ item.id }>{item.name}</option>
            ))
          }
        </select>
      </label>
      <label
        className="flex flex-col m-5"
        htmlFor="address"
      >
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          name="address"
          id="address"
          type="text"
          value={ address }
          onChange={ (event) => setAddress(event.target.value) }
        />
      </label>
      <label
        className="flex flex-col m-5"
        htmlFor="number"
      >
        Número
        <input
          data-testid="customer_checkout__input-addressNumber"
          name="number"
          id="number"
          type="text"
          value={ number }
          onChange={ (event) => setNumber(event.target.value) }
        />
      </label>
    </form>
  );
}

DeliveryForm.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
};
