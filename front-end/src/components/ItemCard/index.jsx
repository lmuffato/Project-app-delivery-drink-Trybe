import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrice } from '../../context/productsProvider';
import replaceDotToComa from '../../services/productPages/replaceDotToComa';
import styles from './styles.module.css';

export default function ItemCard({ id, name, price, image, calculateTotalPrice }) {
  const [quantity, setQuantity] = useState(0);
  const { putItem, setPutItem } = usePrice();

  const handleChange = (event) => {
    const newItem = { id, name, price };
    const findItem = putItem.find((item) => item.id === id);
    if (findItem) {
      setQuantity(event.target.value.replace(/^0+/, ''));
      findItem.quantity = Number(event.target.value);
    } else {
      setQuantity(event.target.value.replace(/^0+/, ''));
      setPutItem((prevState) => (
        [...prevState, { ...newItem, quantity: Number(event.target.value) }]));
    }
  };

  const handleAddItem = () => {
    const newItem = { id, name, price };
    const findItem = putItem.find((item) => item.id === id);
    if (findItem && findItem.quantity) {
      setQuantity(Number(quantity) + 1);
      findItem.quantity = Number(quantity) + 1;
    } else {
      setQuantity(quantity + 1);
      setPutItem((prevState) => (
        [...prevState, { ...newItem, quantity: Number(quantity) + 1 }]));
    }
  };

  const handleRemoveItem = () => {
    const findItem = putItem.find((item) => item.id === id);
    if (quantity === 0) {
      setQuantity(0);
      return null;
    }
    if (findItem) {
      setQuantity(quantity - 1);
      findItem.quantity = quantity - 1;
    }
    if (findItem.quantity === 0) {
      const removeItem = putItem.filter((item) => item.id !== id);
      setPutItem(removeItem);
      setQuantity(0);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [quantity, putItem, calculateTotalPrice]);

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
            onClick={ handleRemoveItem }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ (event) => handleChange(event) }
            className={ styles.quantityInput }
            inputMode="numeric"
            type="text"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ handleAddItem }
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
