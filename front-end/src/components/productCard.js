import React from 'react';
import PropTypes from 'prop-types';

function Card({ index, strName, strThumb, strPrice }) {
  return (
    <button
      className="card"
      type="button"
      data-testid={ `card-id-${index}` }
    >
      <img
        className="card-img"
        src={ strThumb }
        data-testid={ `${index}-card-img` }
        alt="foto da receita"
      />
      <h2 className="card-title" data-testid={ `card-title-${index}` }>{ strName }</h2>
      <h4 className="card-price" data-testid={ `card-price-${index}` }>{ strPrice }</h4>
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
