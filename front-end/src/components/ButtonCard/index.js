import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import './style.css';

function ButtonCard({ id }) {
  return (
    <div className="buttonCardContainer">
      <button
        type="button"
        className="addButton"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        <GrFormAdd />
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ 0 }
      />
      <button
        type="button"
        className="removeButton"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        <IoMdRemove />
      </button>
    </div>
  );
}

ButtonCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ButtonCard;
