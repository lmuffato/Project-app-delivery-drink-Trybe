import React from 'react';
import Button from './atoms/Button';
// import Input from './atoms/Input';

export default function CheckoutDetails() {
  return (
    <>
      <form className="form-customer-checkout">
        <label htmlFor="seller" className="checkout-detail checkout-detail-seller">
          P. Vendedora Responsável
          <select
            className="checkout-seller"
            type="select"
            name="seller"
          >
            <option data-testid="customer_checkout__select-seller">Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="address" className="checkout-detail checkout-detail-address">
          Endereço
          <input
            className="checkout-address"
            type="text"
            data-testid="customer_checkout__input-address"
            name="address"
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
            name="address-number"
            placeholder="0"
          />
        </label>
      </form>
      <Button
        className="btn-checkout"
        type="button"
        data-testid="customer_checkout__button-submit-order"
        text="Finalizar pedido"
      />
    </>
  );
}
