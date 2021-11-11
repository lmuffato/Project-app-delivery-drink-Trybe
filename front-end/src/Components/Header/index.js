import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Checkout({ pageName }) {
  return (
    <header>
      <div className="page-title">
        <div className="title">
          <h1>{pageName}</h1>
        </div>

        <div className="title sub-title">
          <h2>Meus pedidos</h2>
        </div>
      </div>

      <div className="user-info">
        <span>
          Cicrano da Silva
        </span>
        <span>
          Sair
        </span>
      </div>
    </header>
  );
}

Checkout.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Checkout;
