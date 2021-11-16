import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const axios = require('axios').default;

export default function Produtos() {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [lodaing, setLoading] = useState(true);
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
      <h1>Produtos</h1>
      {lodaing ? <p>Loading....</p> : products
        .map((p) => <img key={ p.id } alt="productImg" src={ p.url_image } />)}
      ;
    </div>
  );
}
