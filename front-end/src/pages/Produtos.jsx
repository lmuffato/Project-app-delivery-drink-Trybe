import React, { useEffect } from 'react';

const axios = require('axios').default;

export default function Produtos() {
  const token = localStorage.getItem('token');
  useEffect(
    async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:3001/products/',
          responseType: 'json',
          headers: { Authorization: token },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  );

  return (
    <div>
      <h1>Produtos</h1>
    </div>
  );
}
