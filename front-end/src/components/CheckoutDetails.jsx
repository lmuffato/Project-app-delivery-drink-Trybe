import React, { useContext, useEffect, useState } from 'react';
// import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../context/Products/ProductsContext';
import { saleAction, getUsers } from '../utils/API/fetch';
import Button from './atoms/Button';
// import Input from './atoms/Input';

export default function CheckoutDetails() {
  const [sale, setSale] = useState({});
  const [sellers, setSellers] = useState([]);
  const { totalPrice } = useContext(ProductsContext);
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const { id: userId, token } = user;
  const cart = JSON.parse(localStorage.getItem('carrinho'));

  useEffect(() => {
    setSale({
      ...sale,
      userId,
      sellerId: 1,
      // userName,
      token,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setSellers(users
        .filter(({ role }) => role === 'seller')
        .map(({ name, id }) => ({ name, id })));
    })();
  }, []);

  // "userId": 1,
  // "sellerId": 2,
  // "totalPrice": 150,
  // "deliveryAddress": "Rua Xablau",
  // "deliveryNumber": "100"

  const confirmSale = async (products) => {
    console.log(sale);
    const result = await saleAction({ ...sale, products, token });
    const saleId = result?.result;
    if (saleId) history.push(`/customer/orders/${saleId}`);
  };

  const mountSale = () => {
    const products = cart.map(
      ({ name, count: quantity }) => ({ name, quantity }),
    );
    setSale({
      ...sale,
      products,
      totalPrice,
    });
    confirmSale(products);
  };

  const handleChange = ({ target: { name, value } }) => {
    setSale({
      ...sale,
      [name]: value,
      totalPrice,
    });
  };

  return (
    <>
      <form className="form-customer-checkout">
        <label htmlFor="seller" className="checkout-detail checkout-detail-seller">
          P. Vendedora Responsável
          <select
            className="checkout-seller"
            type="select"
            name="sellerId"
            onChange={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            <option disabled selected>Selecione...</option>
            { sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                { seller.name }
              </option>))}
            ;
          </select>
        </label>
        <label htmlFor="address" className="checkout-detail checkout-detail-address">
          Endereço
          <input
            className="checkout-address"
            type="text"
            data-testid="customer_checkout__input-address"
            name="deliveryAddress"
            onChange={ handleChange }
            placeholder="Rua, Avenida, etc..."
          />
        </label>
        <label
          htmlFor="address-number"
          className="checkout-detail checkout-detail-address-number"
        >
          Número
          <input
            className="checkout-address-number"
            type="number"
            data-testid="customer_checkout__input-addressNumber"
            name="deliveryNumber"
            onChange={ handleChange }
            placeholder="0"
          />
        </label>
      </form>
      <Button
        className="btn-checkout"
        type="button"
        data-testid="customer_checkout__button-submit-order"
        text="Finalizar pedido"
        onClick={ mountSale }
      />
    </>
  );
}
