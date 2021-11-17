import React from 'react';
import PropTypes from 'prop-types';

function Card({ index, strName, strThumb, strPrice }) {
  return (
    <button
      className="card"
      type="button"
    >
      <img
        className="card-img"
        src={ strThumb }
        data-testid={ ` customer_products__img-card-bg-image-${index}` }
        alt="foto da receita"
      />
      <h2
        className="card-title"
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        { strName }
      </h2>
      <h4
        className="card-price"
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { strPrice }
      </h4>
    </button>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  strName: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  strPrice: PropTypes.string.isRequired,
};

export default Card;
