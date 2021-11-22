import React, { useState, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { adddItem } from '../redux/cartSlice';

export default function ProductCard(props) {
  const { product } = props;
  const { id, name, price } = product;
  const [qtd, setQtd] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const store = useStore();
  const dispatch = useDispatch();

  const newPrice = price.split('.').join(',');

  const createItem = (prevState, item) => {
    const newState = [...prevState];
    newState.push(item);
    dispatch(adddItem({ newState }));
  };

  const deleteItem = (prevState) => {
    const newState = [];
    prevState.forEach((item) => {
      if (item.id !== id) {
        newState.push(item);
      }
    });
    dispatch(adddItem({ newState }));
  };

  const updateItem = (prevState, newItem) => {
    const newState = prevState.map((item) => {
      if (item.id === id) {
        return newItem;
      }
      return item;
    });
    dispatch(adddItem({ newState }));
  };

  useEffect(() => {
    const prevState = store.getState().shoppingCart.cartItems;
    const newItem = {
      id,
      qtd,
      price: parseFloat(price),
      subtotal: (qtd * parseFloat(price)),
    };
    if (qtd > 0) {
      let action = 'create';
      prevState.forEach((item) => {
        if (item.id === id) {
          action = 'update';
        }
      });
      if (action === 'update') {
        updateItem(prevState, newItem);
      } else {
        createItem(prevState, newItem);
      }
      setDisabled(false);
    }
    if (qtd <= 0) {
      setDisabled(true);
      let action = 'update';
      prevState.forEach((item) => {
        if (item.id === id) {
          action = 'delete';
        }
      });
      if (action === 'delete') {
        deleteItem(prevState);
      }
    }
  }, [qtd]);

  const changeInput = (event) => {
    if (event.target.value > 0) {
      setQtd(parseInt(event.target.value, 10));
    }
  };

  return (
    <div className="w-1/6 m-5 bg-gray-300">
      <div
        className="h-60 bg-white"
      >
        <div
          className="flex items-center h-10 bg-white"
        >
          <p className="p-2">R$</p>
          <p data-testid={ `customer_products__element-card-price-${id}` }>
            { newPrice }
          </p>
        </div>
        <img
          className="max-h-40 ml-auto mr-auto"
          src={ product.url_image }
          alt="product Img"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
        <div className="flex items-center justify-center">
          <button
            className="bg-indigo-600 w-8 text-white hover:bg-indigo-700 m-4
            disabled:bg-indigo-400"
            onClick={ () => setQtd(qtd - 1) }
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            disabled={ disabled }
          >
            -
          </button>
          <input
            className="w-1/12 text-center"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ qtd }
            onChange={ (event) => changeInput(event) }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            className="bg-indigo-600 w-8 text-white hover:bg-indigo-700 m-4"
            onClick={ () => setQtd(qtd + 1) }
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};
