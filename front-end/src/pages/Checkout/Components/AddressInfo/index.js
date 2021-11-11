import React from 'react';

import './styles.css';

function AddressInfo() {
  return (
    <div className="form-container">
      <form action="">
        <label htmlFor="seller">
          P. Vendedora Responsável
          <br />

          <select name="seller" id="seller">
            <option value="seller1">Tiago Santos</option>
            <option value="seller2">Wellington Cypriano</option>
          </select>
        </label>

        <label htmlFor="seller">
          Endereço
          <br />

          <input type="text" />
        </label>

        <label htmlFor="seller">
          Número
          <br />

          <input type="number" />
        </label>

      </form>

      <div className="button-container">
        <button type="button">FINALIZAR PEDIDO</button>
      </div>

    </div>
  );
}

export default AddressInfo;
