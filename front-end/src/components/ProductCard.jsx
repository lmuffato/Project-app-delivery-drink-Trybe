import React, { useState, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import { adddItem } from '../redux/cartSlice';

export default function ProductCard(props) {
  const { product } = props;
  const { id, name, price } = product;
  const [qtd, setQtd] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const store = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (qtd > 0) {
      setDisabled(false);
    }
    if (qtd <= 0) {
      setDisabled(true);
    }
  }, [qtd]);

  const createItem = (prevState) => {
    const newState = [...prevState];
    const item = { id, qtd: (qtd + 1) };
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

  const updateItem = (prevState, operation) => {
    const newState = prevState.map((item) => {
      let newItem = item;
      if (item.id === id && operation === 'sum') {
        newItem = {
          id,
          qtd: (qtd + 1),
        };
      } if (item.id === id && operation === 'sub') {
        newItem = {
          id,
          qtd: (qtd - 1),
        };
      }
      return newItem;
    });
    dispatch(adddItem({ newState }));
  };

  const addItem = () => {
    setQtd(qtd + 1);
    const prevState = store.getState().shoppingCart.cartItems;
    let action = 'create';
    prevState.forEach((item) => {
      if (item.id === id) {
        action = 'update';
      }
    });
    if (action === 'update') {
      updateItem(prevState, 'sum');
    } else {
      createItem(prevState);
    }
  };

  const removeItem = () => {
    setQtd(qtd - 1);
    const prevState = store.getState().shoppingCart.cartItems;
    let action = 'update';
    prevState.forEach((item) => {
      if (item.id === id && item.qtd === 1) {
        action = 'delete';
      }
    });
    if (action === 'delete') {
      deleteItem(prevState);
    } else {
      updateItem(prevState, 'sub');
    }
  };

  return (
    <div className="w-1/6 m-5 bg-gray-300">
      <div
        className="bg-center bg-no-repeat bg-contain h-60 bg-white"
        alt="product Img"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ product.url_image }
        style={ { backgroundImage: `url(${product.url_image})` } }
      >
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
          className="p-2"
        >
          { `R$ ${price}` }
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
        <div data-testid={ `customer_products__input-card-quantity-${id}` }>
          <button
            className="bg-indigo-600 w-8 text-white hover:bg-indigo-700 m-4
            disabled:bg-indigo-400"
            onClick={ () => removeItem() }
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            disabled={ disabled }
          >
            -
          </button>
          {qtd}
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            className="bg-indigo-600 w-8 text-white hover:bg-indigo-700 m-4"
            onClick={ () => addItem() }
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
