import React, { useState, useEffect, useCallback } from 'react';
// import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
// import { userLogin } from '../redux/userSlice';

export default function ProductList(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [products, setproducts] = useState([]);

  const getProducts = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/products`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setproducts(res.data);
        })
        .catch((err) => console.log(err));
    }, [setproducts, token],
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(products);

  return (
    <div className="w-full flex flex-wrap p-20">
      {
        products.map((product, index) => (<ProductCard
          product={ product }
          key={ index }
        />))
      }
    </div>
  );
}

ProductList.propTypes = {
  token: PropTypes.string.isRequired,
};
