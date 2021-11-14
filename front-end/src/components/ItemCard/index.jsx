import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './styles.module.css';

export default function ItemCard({ id, name, price, image }) {
  return (
    <div className={ styles.productCard }>
      <p
        className={ styles.price }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
        height="150px"
      />
      <div className={ styles.productHeader }>
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div className={ styles.quantityBtn }>
          <Button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            title="-"
          />
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            defaultValue={ 0 }
            className={ styles.quantityInput }
            type="number"
            min="0"
          />
          <Button
            type="button"
            title="+"
          />
        </div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;
