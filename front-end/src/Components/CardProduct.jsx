import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/Cardproducs.css';

// const oderListExemple = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
//   { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
//   { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
//   { productId: 3, name: 'vinho', quantity: 1, price: 60 },
//   { productId: 4, name: 'whisk', quantity: 5, price: 80 },
// ];

// console.log(oderListExemple);

export default function CardProduct({ id,
  drink, cost, thumb, changeSomeStatus, setChangeSomeStatus }) {
  const { itensList, setItensList } = useContext(NewOrderContext);

  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(cost * counter);

  useEffect(() => {
    setChangeSomeStatus(!changeSomeStatus);
  }, [counter, price]);

  useEffect(() => {
    const objectProducts = {
      productId: id, name: drink, quantity: counter, price: cost,
    };

    if (!itensList.length && counter) setItensList([objectProducts]);
    else {
      let itemList = itensList.find((item) => item.id === id);
      if (itemList !== undefined) itemList = objectProducts;
    }
  }, [counter]);

  useEffect(() => {
    setPrice(counter * cost);
  }, [counter]);

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

// thumb
