import React from 'react';
import { useDeliveryDetails } from '../../hooks/useDeliveryDetails';
import './style.css';

function DeliveryDetails() {
  const { sellers } = useDeliveryDetails();
  if (!sellers) return <h1>Loading</h1>;
  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>

      <form className="deliveryForm">
        <div className="deliveryFormContainer">
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              name="seller"
              id="seller"
              required
              data-testid="customer_checkout__select-seller"
            >
              {sellers.map(({ id, name }) => (
                <option value={ name } key={ id }>{name}</option>
              ))}
            </select>
          </label>

          <label htmlFor="address">
            Endereço
            <input
              id="address"
              type="text"
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              required
              data-testid="customer_checkout__input-address"
            />
          </label>

          <label htmlFor="number">
            Número
            <input
              id="number"
              type="number"
              required
              placeholder="198"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </div>

        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default DeliveryDetails;
