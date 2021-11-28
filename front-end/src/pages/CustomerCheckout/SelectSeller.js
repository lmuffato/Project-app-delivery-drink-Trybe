import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../api';
import { useAuth } from '../../contexts/auth';
import Select from '../../components/Select';

const Form = styled.form`
  padding: 10px 10px;

  & > * {
    margin-top: 20px;
  }
  .inputs {
    display: flex;
    justify-content: space-between;
    & > * { flex: 2; }
    & > *:first-child {
      flex: 1;
      width: min-content;
    }
    & > *:nth-child(odd) {
      margin-inline: 20px;
    }
  }
  .submit {
    button {
      margin: 0 auto;
      display: block;
    }
  }
`;

function SelectSeller({ cartItems, totalPrice }) {
  const { user } = useAuth();
  const navigation = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [select, setSelect] = useState(null);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const createSale = (ev) => {
    ev.preventDefault();
    const cart = cartItems.map(
      ({ id: productId, quantity }) => ({ productId, quantity }),
    );
    const out = {
      userId: user.id,
      sellerId: Number(select),
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      cart,
    };
    api.sales.create(out, user.token)
      .then((data) => { navigation(`/customer/orders/${data.id}`); })
      .catch((x) => console.log(x.message));
  };

  useEffect(() => {
    api.user.getAll(user.token, 'seller')
      .then((data) => {
        setSellers(data);
        setSelect(data[0].id);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (select === null) return <p>Carregando...</p>;

  const selectData = sellers.map(({ id: value, name: text }) => ({ text, value }));

  return (
    <Form onSubmit={ createSale }>
      <div className="inputs">
        <Select
          label="Pessoa vendedora"
          elemId="seller-id"
          testid="customer_checkout__select-seller"
          data={ selectData }
          onValueChange={ setSelect }
          value={ select }
        />

        <Input
          type="text"
          label="Endereço"
          value={ address }
          onChange={ ({ target: { value } }) => setAddress(value) }
          datatestid="customer_checkout__input-address"
        />
        <Input
          type="number"
          label="Número"
          value={ number }
          onChange={ ({ target: { value } }) => setNumber(value) }
          datatestid="customer_checkout__input-addressNumber"
        />
      </div>
      <div className="submit">
        <Button
          type="submit"
          datatestid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </Button>
      </div>
    </Form>
  );
}

SelectSeller.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default SelectSeller;
