import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import styles from './styles.module.css';

export default function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div className={ styles.products }>
        { data && data.map(({ id, name, price, urlImage }) => (
          <ItemCard
            id={ id }
            key={ id }
            name={ name }
            price={ price }
            image={ urlImage }
          />
        )) }
      </div>
    </div>
  );
}
