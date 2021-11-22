import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { formatMoney } from 'accounting';
import noImage from '../images/noimage.jpg';
import styles from '../styles/components/ProductCard.module.scss';
import { cartContext } from '../contexts/cart';

export default function ProductCard(props) {
  const { increaseQuantity, decreaseQuantity } = useContext(cartContext);
  const { className: customClass, image, title, price, index } = props;
  const [quantity, setQuantity] = useState(0);

  function addProduct() {
    increaseQuantity(props);
    setQuantity(quantity + 1);
  }

  function removeProduct() {
    if (quantity > 0) {
      decreaseQuantity(props);
      setQuantity(quantity - 1);
    }
  }

  return (
    <div { ...props } className={ `${styles.productCard} ${customClass}` }>
      <div className={ styles.image }>
        <img
          src={ image }
          alt={ title }
          data-testid={ `customer_products__img-card-bg-image-${index}` }
        />
        <span>
          R$
          <span data-testid={ `customer_products__element-card-price-${index}` }>
            { formatMoney(price, { symbol: '', decimal: ',' }) }
          </span>
        </span>
      </div>
      <div className={ styles.info }>
        <h1
          data-testid={ `customer_products__element-card-title-${index}` }
        >
          { title }
        </h1>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${index}` }
            onClick={ removeProduct }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${index}` }
            className={ styles.quantity }
            value={ quantity }
            readOnly
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${index}` }
            onClick={ addProduct }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ProductCard.defaultProps = {
  className: '',
  image: noImage,
};
