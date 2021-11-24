import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductCard from './ProductCard';

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
