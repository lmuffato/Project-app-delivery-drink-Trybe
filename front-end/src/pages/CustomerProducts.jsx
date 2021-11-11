import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './CustomerProducts.css';
import axios from 'axios';
import CustomerNavBar from '../components/CustomerNavBar';
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
      <CustomerNavBar fixed="top" />
      <Row xs={ 1 } md={ 2 } className="g-4">
        {
          productList.map((prod) => (
            <ProductCard className="productCard" key={ prod.name } product={ prod } />
          ))
        }
      </Row>
    </div>
  );
}

export default ClientProducts;
