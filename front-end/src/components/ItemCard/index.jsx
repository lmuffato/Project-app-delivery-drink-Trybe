import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import replaceDotToComa from '../../services/productPages/replaceDotToComa';
import styles from './styles.module.css';
import useShoppingCart from '../../hooks/useShoppingCart';
import { usePrice } from '../../context/productsProvider';

export default function ItemCard({ id, name, price, image }) {
  const newItem = { id, name, price };
  const { calculateTotalPrice } = usePrice();
  const { addItem, removeItem, quantity, handleChange } = useShoppingCart();

  useEffect(() => {
    calculateTotalPrice();
  }, [quantity, calculateTotalPrice]);

  return (
    <div className={ styles.productCard }>
      <p
        className={ styles.price }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { replaceDotToComa(price) }
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
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ () => removeItem(id) }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ (event) => handleChange(event, newItem, id) }
            className={ styles.quantityInput }
            inputMode="numeric"
            type="text"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ () => addItem(newItem, id) }
          >
            +
          </button>
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
