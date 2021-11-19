import React from 'react';
// import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import { userLogin } from '../redux/userSlice';

export default function ProductCard(props) {
  const { product } = props;
  const { id, name, price } = product;

  return (
    <div>
      <p>{ price }</p>
      <img alt="product Img" src={ product.url_image } />
      <div>
        <p>{name}</p>
        qtd
        { id }
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};
