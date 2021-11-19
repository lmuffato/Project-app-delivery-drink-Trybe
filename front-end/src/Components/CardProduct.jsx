import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Cardproducs.css';

const CardProduct = ({ id, drink, cost, thumb }) => (
  <div key={ id } className="cardProduct">
    <div>
      <p className="unitPrice">{`R$ ${cost}`}</p>
      <img
        className="imageDrinkCard"
        alt="drink"
        data-testid={ `customer_products__element-card-price-${id}` }
        src={ thumb }
      />
    </div>
    <div className="footerCardDrink">
      <h5>{drink}</h5>
      <div className="addQuantities">
        <button type="button">-</button>
        <p>0</p>
        <button type="button"> + </button>
      </div>
    </div>
  </div>
);

CardProduct.propTypes = {
  key: PropTypes.string,
  drink: PropTypes.string,
  cost: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;

export default CardProduct;
