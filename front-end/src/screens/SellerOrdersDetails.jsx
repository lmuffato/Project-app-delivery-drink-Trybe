import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import OrderDetails from '../components/OrderDetails';
import SellerOrderTable from '../components/SellerOrderTable';

const urlBase = 'http://localhost:3001';
const axios = require('axios').default;

function SellerOrdersDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [saleInfo, setSaleInfo] = useState([]);
  const [productsQuantitiesInfo, setProductsQuantitiesInfo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getSale = async () => {
      try {
        const {
          data:
          { sale, productsQuantities } } = await axios.get(`${urlBase}/sales/${id}`);
        setSaleInfo(sale);
        setProductsQuantitiesInfo(productsQuantities);
      } catch (e) {
        console.log(e.response);
      }
    };
    getSale();
    setIsLoading(false);
  }, [id]);
  return (
    <>
      <NavBarAdmin />
      {!isLoading && (
        <>
          <OrderDetails data={ saleInfo } />
          <SellerOrderTable
            sale={ saleInfo }
            productsQuantities={ productsQuantitiesInfo }
          />
        </>)}
    </>
  );
}

export default SellerOrdersDetails;
