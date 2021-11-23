import React, { useState, useEffect, useContext } from 'react';
// import moment from 'moment';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleDetails from '../../services/fetchSaleDetails';
import fetchSellerSale from '../../services/fetchSellerSales';
import OrderHeader from './OrderHeader';
import fetchProducts from '../../services/fetchProducts';
import OrderProductsTable from './OrderProductsTable';

export default function OrderDetails({ id }) {
  const { user } = useContext(ContextDeliveryApp);
  const [saleDetails, setSaleDetails] = useState({});
  const [sale, setSale] = useState({});

  const getSaleDetails = async () => {
    const sellerId = user.id;
    const { token } = user;
    const details = await fetchSaleDetails(token, id, sellerId);
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
  };

  const getSale = async () => {
    const { token, id: sellerId } = user;
    const salesBySeller = await fetchSellerSale(token, sellerId);
    const saleById = salesBySeller.data.sellerSales.filter((s) => {
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

  return (
    <div>
      <OrderHeader sale={ sale } />
      { saleDetails[0] ? <OrderProductsTable items={ saleDetails } sale={ sale } /> : ''}
    </div>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
