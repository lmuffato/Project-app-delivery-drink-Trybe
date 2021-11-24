import React, { useContext, useEffect } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import CustomerDetailsCard from './CustomerDetailsCard';

export default function CustomerOrdersDetailsCard() {
  const { user } = useContext(ContextDeliveryApp);
  const [sales, setSales] = useState([]);

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

  useEffect(() => {
    getSaleDetails();
    console.log('useEffect');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { sales ? sales.map((sale) => (
        <CustomerDetailsCard key={ sale.id } sale={ sale } />)) : '' }
    </div>
  );
}
