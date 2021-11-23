import React from 'react';

export default function DeliveryForm() {
  const sellers = ['fulano', 'siclano'];

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
        >
          {
            sellers.map((seller, index) => (
              <option key={ index }>{seller}</option>
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
        />
      </label>
    </form>
  );
}
