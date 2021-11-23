import React, { useEffect, useState } from 'react';

import Card from '../components/productCard';
import Header from '../components/Header/Header';
import BottomBox from '../components/bottomBox';

const axios = require('axios').default;

export default function Produtos() {
  const user = localStorage.getItem('user');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = JSON.parse(user);

  async function getProducts() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/products',
        responseType: 'json',
        headers: { Authorization: userName.token },
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
          : <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      }
      <div
        style={ { width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap' } }
      >
        {
          loading ? <p>Loading....</p>
            : products
              .map((e, i) => (
                <Card
                  key={ i }
                  index={ i }
                  id={ e.id }
                  strThumb={ e.url_image }
                  strName={ e.name }
                  strPrice={ e.price }
                />
              ))
        }
      </div>
      <BottomBox />
    </div>
  );
}
