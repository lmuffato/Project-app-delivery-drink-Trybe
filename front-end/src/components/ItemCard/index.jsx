import React from 'react';
import Button from '../Button';
import styles from './styles.module.css';

export default function ItemCard() {
  return (
    <div className={ styles.productCard }>
      <p
        className={ styles.price }
      >
        R$2,00
      </p>
      <img
        src="https://bityli.com/z39mY3"
        alt="cerveja"
        height="150px"
      />
      <div className={ styles.productHeader }>
        <p>
          Nome do produto
        </p>
        <div className={ styles.quantityBtn }>
          <Button
            type="button"
            title="-"
          />
          <input
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
