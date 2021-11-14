import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrice } from '../../context/productsProvider';
import Button from '../Button';
import styles from './styles.module.css';

export default function ItemCard({ id, name, price, image }) {
  const [inputContent, setInputContent] = useState(0);
  const { putItem, setPutItem } = usePrice();

  useEffect(() => {
    putItem.forEach((item, index) => {
      if (item.id === id) putItem.splice(index, 1);
    });

    setPutItem([...putItem, { id, name, price, quantity: inputContent }]);
  }, [inputContent]);

  const buttonClick = ({ textContent }) => {
    if (textContent === '+') {
      setInputContent(inputContent + 1);
    }

    if (textContent === '-' && inputContent > 0) {
      setInputContent(inputContent - 1);
    }
  };

  return (
    <div className={ styles.productCard }>
      <p
        className={ styles.price }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$ ${price}` }
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
            onClick={ (e) => buttonClick(e.target) }
            title="-"
          />
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            defaultValue={ 0 }
            value={ inputContent }
            className={ styles.quantityInput }
            type="text"
          />
          <Button
            type="button"
            title="+"
            onClick={ (e) => buttonClick(e.target) }
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
