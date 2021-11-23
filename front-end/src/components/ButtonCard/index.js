import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import './style.css';
import { useCart } from '../../hooks/useCart';

function ButtonCard({ id, name, price }) {
  const [actualQuantityProduct, setActualQuantityProduct] = React.useState(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));

    if (!cart || cart.every((elem) => elem.id !== id)) {
      return 0;
    }
    const actualCart = cart.find((elem) => elem.id === id);
    return actualCart.quantity;
  });

  const { addToCart, removeProdCart, manualEntry } = useCart();

  const checkQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) {
      setActualQuantityProduct(0);
      return;
    }
    const actualCart = cart.find((elem) => elem.id === id);
    setActualQuantityProduct(actualCart.quantity);
  };

  const remove = () => {
    removeProdCart(id, name, price);
    checkQuantity();
  };

  const add = () => {
    addToCart(id, name, price);
    checkQuantity();
  };

  const manual = (event) => {
    const quantity = Number(event.target.value);
    manualEntry(id, name, price, quantity);
    checkQuantity();
  };

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
        onChange={ manual }
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
