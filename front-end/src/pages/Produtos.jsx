import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import Card from '../components/productCard';

const axios = require('axios').default;

export default function Produtos() {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/products',
        responseType: 'json',
        headers: { Authorization: token },
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
      {console.log(products)}
      <h1>Produtos</h1>
      {
        loading ? <p>Loading....</p> : products
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
