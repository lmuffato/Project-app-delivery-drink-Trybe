import React from 'react';
import PropTypes from 'prop-types';
import { TiMinus as Minus, TiPlus as Plus } from 'react-icons/ti';

function QtyButton({ position, onClick, id }) {
  switch (position) {
  case 'remove':
    return (
      <button
        className="remove"
        type="button"
        onClick={ onClick }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        <Minus />
      </button>
    );
  case 'add':
    return (
      <button
        className="add"
        type="button"
        onClick={ onClick }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        <Plus />
      </button>
    );
  default:
    return null;
  }
}

QtyButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  position: PropTypes.oneOf(['remove', 'add']).isRequired,
  onClick: PropTypes.func,
};

QtyButton.defaultProps = {
  onClick: () => { },
};

export default QtyButton;
