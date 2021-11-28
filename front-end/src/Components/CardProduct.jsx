import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/Cardproducs.css';

export default function CardProduct({ id,
  drink, cost, thumb, changeSomeStatus, setChangeSomeStatus }) {
  const { itensList, setItensList } = useContext(NewOrderContext);

  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(cost * counter);

  useEffect(() => {
    setChangeSomeStatus(!changeSomeStatus);
  }, [counter, price]);

  useEffect(() => {
    const objectProduct = {
      productId: id, name: drink, quantity: counter, price: cost,
    };

    let arrayProducts = [...itensList];
    arrayProducts.forEach((product, index) => {
      if (product.productId === objectProduct.productId) {
        arrayProducts[index] = objectProduct;
      }
    });
    const haveProduct = arrayProducts.some((some) => id === some.productId);
    if (counter > 0 && !haveProduct) {
      arrayProducts = [...itensList, objectProduct];
    }

    setItensList(arrayProducts);
  }, [counter]);

  const roundPrice = () => {
    const totalPrice = Math.round((counter * cost) * 100) / 100;
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    setPrice(roundPrice());
  }, [counter]);

  useEffect(() => {
    const newArray = itensList.filter((elem) => elem.quantity > 0);
    setItensList(newArray);
  }, [price]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter <= 0) {
      return 0;
    }
    setCounter(counter - 1);
  }

  function handleChange(e) {
    if (Number(e.target.value)) {
      setCounter(Number(e.target.value));
    }
  }

  return (
    <div key={ id } className="card-product-container">
      <div className="card-upside">
        <div
          data-testid={ `customer_products__element-card-price-${id}` }
          className="unit-price"
        >
          { `R$ ${cost.toString().replace('.', ',')}` }
        </div>
        <img
          className="imageDrinkCard"
          alt="drink"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ thumb }
        />
      </div>
      <div className="footer-card">
        <h5 data-testid={ `customer_products__element-card-title-${id}` }>{drink}</h5>
        <div className="quantities">
          <button
            data-testid={
              `customer_products__button-card-rm-item-${id}`
            }
            onClick={ decrement }
            type="button"
            className="add-rem-buttons"
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ Number(counter) }
            onChange={ handleChange }
            className="add-rem-buttons label-quantity"
          />
          <button
            data-testid={
              `customer_products__button-card-add-item-${id}`
            }
            onClick={ increment }
            type="button"
            className="add-rem-buttons"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  key: PropTypes.string,
  drink: PropTypes.string,
  cost: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
