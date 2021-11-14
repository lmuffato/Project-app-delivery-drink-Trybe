import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

export default function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  return (
    <div>
      <Header />
      { data && data.map(({ id, name, price, urlImage }) => (
        <ItemCard
          key={ id }
          name={ name }
          price={ price }
          image={ urlImage }
        />
      )) }
    </div>
  );
}
