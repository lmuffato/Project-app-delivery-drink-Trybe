import React, { useEffect } from 'react';

const axios = require('axios').default;

export default function Produtos() {
  useEffect(
    async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:3001/products/',
          responseType: 'json',
          headers: { Authorization:
            `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy
            Ijp7I…Y5M30.o6o8lftZaR1Z_ZuMFEXswGHch3onnySrzEobuSg061Q` },
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
