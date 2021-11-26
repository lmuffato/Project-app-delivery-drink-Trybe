/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import SellerOrderTable from '../components/SellerOrderTable';

const urlBase = 'http://localhost:3001';
const axios = require('axios').default;

function SellerOrdersDetails() {
  const { id } = useParams();
  const [saleInfo, setSaleInfo] = useState();

  useEffect(() => {
    const getSale = async () => {
      const { data } = await axios.get(`${urlBase}/sales/${id}`);
      setSaleInfo(data);
    };
    getSale();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <NavBarAdmin />
      { !saleInfo
        ? <p>Loading</p>
        : (
          <SellerOrderTable
            { ...saleInfo }
          />) }
    </>
  );
}

export default SellerOrdersDetails;
