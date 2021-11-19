import React, { useState } from 'react';
// import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import { userLogin } from '../redux/userSlice';

export default function ProductCard(props) {
  const { product } = props;
  const { id, name, price } = product;
  const [qtd, setQtd] = useState(0);
  console.log(id);

  return (
    <div className="w-1/6 m-5 bg-gray-300">
      <div
        className="bg-center bg-no-repeat bg-contain h-60 bg-white"
        alt="product Img"
        src={ product.url_image }
        style={ { backgroundImage: `url(${product.url_image})` } }
      >
        <p
          className="p-2"
        >
          { `R$ ${price},00` }
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <p>{name}</p>
        <div>
          <button
            onClick={ () => setQtd(qtd - 1) }
            type="button"
          >
            -
          </button>
          {qtd}
          <button
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
