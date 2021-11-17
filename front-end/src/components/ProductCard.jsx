import PropTypes from 'prop-types';
import React from 'react';
import noImage from '../images/noimage.jpg';
import styles from '../styles/components/ProductCard.module.scss';

export default function ProductCard(props) {
  const { className: customClass, image, title, price } = props;
  return (
    <div { ...props } className={ `${styles.productCard} ${customClass}` }>
      <div className={ styles.image }>
        <img
          src={ image }
          alt={ title }
          data-testid="customer_products__img-card-bg-image-"
        />
        <span data-testid="customer_products__element-card-price-">{ `R$${price}` }</span>
      </div>
      <div className={ styles.info }>
        <h1 data-testid="customer_products__element-card-title-">{ title }</h1>
        <div>
          <button
            type="button"
            data-testid="customer_products__button-card-rm-item-"
          >
            -
          </button>
          <input
            type="number"
            data-testid="customer_products__input-card-quantity-"
            className={ styles.quantity }
          />
          <button
            type="button"
            data-testid="customer_products__button-card-add-item-"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ProductCard.defaultProps = {
  className: '',
  image: noImage,
};
