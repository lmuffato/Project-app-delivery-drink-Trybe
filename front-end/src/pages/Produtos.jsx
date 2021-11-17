import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import Card from '../components/productCard';
import Header from '../components/header';

const axios = require('axios').default;

export default function Produtos() {
  const user = localStorage.getItem('user');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const local = JSON.parse(user);
  const headerInfo = {
    title: 'Produtos',
    name: local.name,
  };

  async function getProducts() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/products',
        responseType: 'json',
        headers: { Authorization: local.token },
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => { getProducts(); }, []);

  return (
    <div>
      {
        loading ? ''
          : <Header props={ headerInfo } />
      }
      {
        loading ? <p>Loading....</p>
          : products
            .map((e, i) => (
              <Card
                key={ i }
                index={ e.id }
                strThumb={ e.url_image }
                strName={ e.name }
                strPrice={ e.price }
              />
            ))
      }
    </div>
  );
}
