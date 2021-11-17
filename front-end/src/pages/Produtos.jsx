import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const axios = require('axios').default;

export default function Produtos() {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [lodaing, setLoading] = useState(true);
  useEffect(
    async () => {
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
    }, [],
  );

  return (
    <div>
      <h1>Produtos</h1>
      {lodaing ? <p>Loading....</p> : products.map((product) => {
        return <img key={ product.id } alt="productImg" src={ product.url_image } />;
      })}
    </div>
  );
}
