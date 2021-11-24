import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import ProductCard from './ProductCard';

export default function UserOrders(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => console.log(err));
    }, [setOrders, token],
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);
  console.log(orders);

  return (
    <div className="w-full flex flex-wrap p-20">
      textão
    </div>
  );
}

UserOrders.propTypes = {
  token: PropTypes.string.isRequired,
};
