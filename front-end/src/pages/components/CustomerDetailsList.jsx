import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleDetails from '../../services/fetchSaleDetails';
import fetchCustomerSales from '../../services/fetchCustomerSales';
import OrderHeaderCustomer from './OrderHeaderCustomer';
import fetchProducts from '../../services/fetchProducts';
import CustomerDetailsCard from './CustomerDetailsCard';

export default function CustomerDetailsList({ id }) {
  const { user } = useContext(ContextDeliveryApp);
  const [saleDetails, setSaleDetails] = useState({});
  const [sale, setSale] = useState({});

  const getSaleDetails = async () => {
    const sellerId = user.id;
    const { token } = user;
    const details = await fetchSaleDetails(token, id, sellerId);
    //  console.log(details);
    const { products } = await fetchProducts(token);
    const list = details.data.saleDetails.salesProduct;
    const orderProducts = list ? list.map((item) => {
      products.forEach((prod) => {
        if (prod.id === item.productId) {
          item.name = prod.name;
          item.price = prod.price;
        }
      });
      return item;
    }) : console.log(list);
    setSaleDetails(orderProducts);
    //   console.log(orderProducts);
  };

  const getSale = async () => {
    const { token, id: sellerId } = user;
    const salesBySeller = await fetchCustomerSales(token, sellerId);
    console.log(salesBySeller);
    const saleById = salesBySeller.data.customerSales.filter((s) => {
      console.log(s.id, id);
      return s.id.toString() === id;
    });
    setSale(saleById[0]);
  };

  useEffect(() => {
    getSale();
    getSaleDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sale]);

  // console.log(sale.status);

  return (
    <div>
      <OrderHeaderCustomer sale={ sale } />
      { saleDetails[0] ? <CustomerDetailsCard items={ saleDetails } sale={ sale } /> : ''}
    </div>
  );
}

CustomerDetailsList.propTypes = {
  id: PropTypes.string.isRequired,
};
