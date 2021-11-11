import React from 'react';

import Header from '../../Components/Header';
import ProductTable from './Components/ProductTable';
import AddressInfo from './Components/AddressInfo';

import './styles.css';

function Checkout() {
  return (
    <div>
      <Header pageName="Produtos" />

      <div className="product-table-container">
        <ProductTable />

        <div className="total-container">
          <span>Total: R$28,46</span>
        </div>
      </div>

      <AddressInfo />

    </div>
  );
}

export default Checkout;
