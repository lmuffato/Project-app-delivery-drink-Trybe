import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router';
// import ProductCard from './ProductCard';

export default function SaleDetail(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [sale, setSale] = useState({});
  const history = useHistory();
  const location = history.location.pathname.split('/');
  const saleId = location[location.length - 1];

  const getSale = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales/${saleId}`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setSale(res.data);
        })
        .catch((err) => console.log(err));
    }, [setSale, token, saleId],
  );

  useEffect(() => {
    getSale();
  }, [getSale]);

  console.log(sale);

  return (
    <div className="w-full flex flex-wrap p-20">
      uauHEin
    </div>
  );
}

SaleDetail.propTypes = {
  token: PropTypes.string.isRequired,
};
