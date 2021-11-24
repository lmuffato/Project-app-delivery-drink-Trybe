import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import RequestCard from '../../components/RequestCard';
import styles from './styles.module.css';

import { dataTestisSeller } from '../../utils/dataTestIdsMyRequestPage';
import Header from '../../components/Header';

export default function SellerPage() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/sale')
      .then((response) => response.json())
      .then((item) => setData(item));
  }, []);

  const userStorage = localStorage.getItem('user');
  let user = null;
  if (userStorage) {
    user = JSON.parse(userStorage);
  }

  const filterSaleSeller = () => {
    const salesSeller = data.filter((sale) => sale.sellerId === user.id);
    return salesSeller;
  };

  const handleFormDate = (dateSales) => format(new Date(dateSales), 'dd/MM/yy');

  return (
    <main className={ styles.container }>
      <Header />
      <section className={ styles.requestsContainer }>
        {filterSaleSeller().map((sale) => (
          <Link key={ sale.id } to={ `/seller/orders/${sale.id}` }>
            <RequestCard
              dataTestId={ dataTestisSeller }
              requestId={ sale.id }
              status={ sale.status }
              date={ handleFormDate(sale.saleDate) }
              price={ sale.totalPrice }
              address={ sale.deliveryAddress }
              number={ sale.deliveryNumber }
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

// branch main-group-17-client-order-details

// $#zebirita#$
// fulana@123

// - 12: customer_products__element-navbar-link-orders
// - 13: customer_products__element-navbar-user-full-name
// - 14: customer_products__element-navbar-link-logout

// dataTestIdRequest: 'seller_orders__element-order-id-',
// dataTestIdStatus: 'seller_orders__element-delivery-status-',
// dataTestIdDate: 'seller_orders__element-order-date-',
// dataTestIdPrice: 'seller_orders__element-card-price-',
// dataTestIdAddress: 'seller_orders__element-card-address-',
