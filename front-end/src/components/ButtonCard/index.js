import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';

function ButtonCard({ id }) {
  return (
    <div className="buttonCardContainer">
      <div
        className="addButton"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        <GrFormAdd />
      </div>
      <div
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        0
      </div>
      <div
        className="removeButton"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        <IoMdRemove />
      </div>
    </div>
  );
}

ButtonCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ButtonCard;
