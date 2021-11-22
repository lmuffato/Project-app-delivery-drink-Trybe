import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ProductListContext from '../context/ProductListContext';

function ProductCard({ id, price, image, name }) {
  const { productsList, setProductsList,
    setTotalPrice } = useContext(ProductListContext);
  const [att, setAtt] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const rmvItem = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    setAtt(!att);
  };

  const addItem = () => {
    setQuantity(quantity + 1);
    setAtt(!att);
  };

  useEffect(() => {
    setProductsList(
      [...productsList, { id, name, price, quantity, total: (price * quantity) }],
    );
  }, [quantity]);

  useEffect(() => {
    const listAux = productsList;
    productsList.forEach((product, index) => {
      if (product.quantity === 0) listAux.splice(index, 1);
      if (product.name === name && product.quantity !== quantity) {
        listAux.splice(index, 1);
      }
    });
    localStorage.setItem('carrinho', JSON.stringify(listAux));
    const totalReduce = listAux
      .reduce((totalP, product) => totalP + product.total, 0);
    setTotalPrice(totalReduce.toFixed(2).replace('.', ','));
  }, [productsList]);

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.toString().replace('.', ',') }
      </span>
      <img
        alt="Imagem do produto"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        width="300px"
        height="300px"
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ rmvItem }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ Number(quantity) }
          onChange={ (element) => setQuantity(Number(element.target.value)) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ addItem }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
