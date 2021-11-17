import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import './style.css';

function ButtonCard({ id }) {
  const [quantityProductsCart, setQuantityProductsCart] = React
    .useState(JSON.parse(localStorage.getItem('carrinho')?.length || 0));

  const updateCart = (param) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const actualCart = cart.find((elem) => elem.id === id);
    let product;
    if (param === '+') {
      product = {
        id,
        quantity: actualCart.quantity + 1,
      };
    }
    if (actualCart.quantity > 0 && param === '-') {
      setQuantityProductsCart((previousValue) => previousValue - 1);
      product = {
        id,
        quantity: actualCart.quantity - 1,
      };
    }
    if (actualCart.quantity === 1 && param === '-') {
      const newCart = cart.filter((productElem) => productElem.id !== id);
      localStorage.setItem('carrinho', JSON.stringify(newCart));
      return;
    }
    const newArrayOfProducts = cart
      .map((productElem) => {
        if (productElem.id === id) {
          return product;
        }
        return productElem;
      });
    localStorage.setItem('carrinho', JSON.stringify(newArrayOfProducts));
  };

  const addToCart = () => {
    setQuantityProductsCart((previousValue) => previousValue + 1);
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart) {
      const product = {
        id,
        quantity: 1,
      };
      const arrayOfProducts = JSON.stringify([product]);
      localStorage.setItem('carrinho', arrayOfProducts);
      return;
    }
    if (cart.every((elem) => elem.id !== id)) {
      const product = {
        id,
        quantity: 1,
      };
      const arrayOfProducts = JSON.stringify([...cart, product]);
      localStorage.setItem('carrinho', arrayOfProducts);
      return;
    }
    updateCart('+');
  };

  const checkQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) {
      return 0;
    }
    const actualCart = cart.find((elem) => elem.id === id);
    return actualCart.quantity;
  };
  console.log(quantityProductsCart);

  const removeProdCart = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) return;
    updateCart('-');
  };

  return (
    <div className="buttonCardContainer">
      <button
        type="button"
        className="removeButton"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ removeProdCart }
      >
        <IoMdRemove />
      </button>
      <div
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        { checkQuantity() }
      </div>
      <button
        type="button"
        className="addButton"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ addToCart }
      >
        <GrFormAdd />
      </button>
    </div>
  );
}

ButtonCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ButtonCard;
