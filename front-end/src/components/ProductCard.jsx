import PropTypes from 'prop-types';
import React from 'react';
import noImage from '../images/noimage.jpg';
import styles from '../styles/components/ProductCard.module.scss';

export default function ProductCard(props) {
  const { className: customClass, image, title, price } = props;
  return (
    <div { ...props } className={ `${styles.productCard} ${customClass}` }>
      <div className={ styles.image }>
        <img src={ image } alt="" />
        <span>{ `R$${price}` }</span>
      </div>
      <div className={ styles.info }>
        <h1>{ title }</h1>
        <div>
          <button type="button">-</button>
          <span className={ styles.quantity }>10</span>
          <button type="button">+</button>
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
