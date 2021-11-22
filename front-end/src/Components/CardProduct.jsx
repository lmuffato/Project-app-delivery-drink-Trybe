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
      console.log('entrou');
      arrayProducts = [...itensList, objectProduct];
    }

    setItensList(arrayProducts);
  }, [counter]);

  const roundPrice = () => {
    const totalPrice = Math.round((counter * cost) * 100) / 100;
    return totalPrice;
  };

  useEffect(() => {
    setPrice(roundPrice());
    console.log(roundPrice());
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

  return (
    <div key={ id } className="cardProduct">
      <div>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
          className="unitPrice"
        >
          {`R$ ${cost}`}
        </p>
        <img
          className="imageDrinkCard"
          alt="drink"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ thumb }
        />
      </div>
      <div className="footerCardDrink">
        <h5 data-testid={ `customer_products__element-card-title-${id}` }>{drink}</h5>
        <div className="addQuantities">
          <button
            data-testid={
              `customer_products__button-card-rm-item-${id}`
            }
            onClick={ decrement }
            type="button"
          >
            -

          </button>
          <p
            data-testid={
              `customer_products__input-card-quantity-${id}`
            }
          >
            { counter }

          </p>
          <button
            data-testid={
              `customer_products__button-card-add-item-${id}`
            }
            onClick={ increment }
            type="button"
          >
            {' '}
            +
            {' '}

          </button>
          <div>
            <p>{ price }</p>
          </div>
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
