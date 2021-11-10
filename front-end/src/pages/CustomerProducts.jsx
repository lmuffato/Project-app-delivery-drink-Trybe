import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/CustomerNavBar';
import ProductCard from '../components/ProductCard';

function ClientProducts() {
  const [productList, setProductList] = useState([]);

  async function getProducts() {
    const productsReq = await axios.get('http://localhost:3001/products');
    const products = productsReq.data;
    setProductList(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar fixed="top" />
      {
        productList.map((prod) => <ProductCard key={ prod.name } product={ prod } />)
      }
    </div>
  );
}

export default ClientProducts;
