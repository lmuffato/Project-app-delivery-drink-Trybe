import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

export default function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <ItemCard />
    </div>
  );
}
