import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router';
import SaleCard from './SaleCard';

export default function SalesList(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [sales, setSales] = useState([]);
  // const history = useHistory();

  const getSales = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales`,
        headers: {
          Authorization: token,
        },
      })
        .then(({ data }) => {
          setSales(data);
        })
        .catch((error) => console.log(error));
    }, [setSales, token],
  );

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <div className="w-full flex flex-wrap p-20">
      {
        sales.map((sale, index) => (
          <SaleCard sale={ sale } key={ index } />
        ))
      }
    </div>
  );
}

SalesList.propTypes = {
  token: PropTypes.string.isRequired,
};
