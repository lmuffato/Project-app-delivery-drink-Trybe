import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import './style.css';
import { useCart } from '../../hooks/useCart';

function ButtonCard({ id, name, price }) {
  // const [quantityProductsCart, setQuantityProductsCart] = React.useState(0);
  const [actualQuantityProduct, setActualQuantityProduct] = React.useState(0);
  const { addToCart, removeProdCart } = useCart();

  const checkQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) {
      setActualQuantityProduct(0);
      return 0;
    }
    const actualCart = cart.find((elem) => elem.id === id);
    setActualQuantityProduct(actualCart.quantity);
    return actualCart.quantity;
  };

  const remove = () => {
    removeProdCart(id, name, price);
    checkQuantity();
  };

  const add = () => {
    addToCart(id, name, price);
    checkQuantity();
  };

  // const updateCart = (param) => {
  //   const cart = JSON.parse(localStorage.getItem('carrinho'));
  //   const actualCart = cart.find((elem) => elem.id === id);
  //   let product;
  //   if (param === '+') {
  //     product = {
  //       id,
  //       name,
  //       price,
  //       quantity: actualCart.quantity + 1,
  //     };
  //   }
  //   if (actualCart.quantity > 0 && param === '-') {
  //     setQuantityProductsCart((previousValue) => previousValue - 1);
  //     product = {
  //       id,
  //       name,
  //       price,
  //       quantity: actualCart.quantity - 1,
  //     };
  //   }
  //   if (actualCart.quantity === 1 && param === '-') {
  //     const newCart = cart.filter((productElem) => productElem.id !== id);
  //     localStorage.setItem('carrinho', JSON.stringify(newCart));
  //     return;
  //   }
  //   const newArrayOfProducts = cart
  //     .map((productElem) => {
  //       if (productElem.id === id) {
  //         return product;
  //       }
  //       return productElem;
  //     });
  //   localStorage.setItem('carrinho', JSON.stringify(newArrayOfProducts));
  // };

  // const addToCart = () => {
  //   const cart = JSON.parse(localStorage.getItem('carrinho'));
  //   console.log('opa');
  //   setQuantityProductsCart((previousValue) => previousValue + 1);
  //   if (!cart) {
  //     console.log(cart);
  //     const product = {
  //       id,
  //       name,
  //       price,
  //       quantity: 1,
  //     };
  //     const arrayOfProducts = JSON.stringify([product]);
  //     localStorage.setItem('carrinho', arrayOfProducts);
  //     return;
  //   }
  //   if (cart.every((elem) => elem.id !== id)) {
  //     const product = {
  //       id,
  //       name,
  //       price,
  //       quantity: 1,
  //     };
  //     const arrayOfProducts = JSON.stringify([...cart, product]);
  //     localStorage.setItem('carrinho', arrayOfProducts);
  //     return;
  //   }
  //   updateCart('+');
  // };

  // const removeProdCart = () => {
  //   const cart = JSON.parse(localStorage.getItem('carrinho'));
  //   if (!cart || cart.every((elem) => elem.id !== id)) return;
  //   updateCart('-');
  // };

  // const setQuantity = () => {
  //   const cartLength = JSON.parse(localStorage.getItem('carrinho')).length;
  //   if (cartLength) {
  //     setQuantityProductsCart(cart);
  //   }
  // };

  return (
    <div className="buttonCardContainer">
      <button
        type="button"
        className="removeButton"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ remove }
      >
        <IoMdRemove />
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ actualQuantityProduct }
      />
      <button
        type="button"
        className="addButton"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ add }
      >
        <GrFormAdd />
      </button>
    </div>
  );
}

ButtonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ButtonCard;
