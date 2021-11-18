import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CheckoutContext from '../context/checkoutContext';

function Card({ id, strName, strThumb, strPrice }) {
  const { addItem } = useContext(CheckoutContext);
  const commaValue = strPrice.replace(/\./g, ',');
  const [qtd, setQtd] = useState(0);

  useEffect(() => { addItem(qtd, strPrice); }, []);

  function addElem() {
    setQtd(() => qtd + 1);
  }

  return (
    <div
      className="card"
      style={ { width: '400px', height: '400px', display: 'flex' } }
    >
      <h4
        className="card-price"
        data-testid={ `customer_products__element-card-price-${id}` }
        style={ { width: '100px', height: '20px', display: 'flex' } }
      >
        { commaValue }
      </h4>
      <img
        className="card-img"
        src={ strThumb }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt="foto da receita"
        style={ { width: '200px', height: '200px', display: 'flex' } }
      />
      <h2
        className="card-title"
        data-testid={ `customer_products__element-card-title-${id}` }
        style={ { width: '400px', height: '50px', display: 'flex' } }
      >
        { strName }
      </h2>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => addElem() }
        style={ { width: '20px', height: '20px', display: 'flex' } }
      >
        +
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ qtd }
        style={ { width: '200px', height: '20px', display: 'flex' } }
        disabled
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => setQtd((e) => {
          if (e <= 0) { return 0; }
          setValue(() => parseFloat(e) * strPrice);
          return parseFloat(e) - 1;
        }) }
        style={ { width: '20px', height: '20px', display: 'flex' } }
      >
        -
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  strName: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  strPrice: PropTypes.string.isRequired,
};

export default Card;
