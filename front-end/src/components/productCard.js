import React from 'react';
import PropTypes from 'prop-types';

function Card({ index, strName, strThumb, strPrice }) {
  return (

    <div className="card" type="button">
      <h4
        className="card-price"
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { strPrice }
      </h4>
      <img
        className="card-img"
        src={ strThumb }
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        alt="foto da receita"
        style={ { width: '200px', height: '200px', display: 'flex' } }
      />
      <h2
        className="card-title"
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        { strName }
      </h2>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${index}` }
        >
          +
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${index}` }
          value="0"
          disabled
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
        >
          -
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  strName: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  strPrice: PropTypes.string.isRequired,
};

export default Card;
