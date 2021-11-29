import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import StyledOrderDetails from './styles';
import ProductTable from '../../components/ProductTable';
import Navbar from '../../components/Navbar';
import SellerDetails from './components/SellerDetails';
import { requestSale } from '../../services/api';
import convertPrice from '../../utils/convertPrice';
import { useUser } from '../../contexts/userContext';

const OrderDetails = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState('');
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);
  const { user } = useUser();

  const getSale = useCallback(
    async (token) => {
      const result = await requestSale(token, id);
      const mappedProducts = result.sale.sale.products.map(
        ({ name, saleProduct: { quantity }, price }) => ({
          name,
          quantity,
          price,
        }),
      );

      setSale(result.sale.sale);
      setProducts(mappedProducts);
      setSeller(result.sale.user.name);
    },
    [id],
  );

  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    getSale(token);
  }, [getSale]);

  const { pathname } = useLocation();

  if (!user) return <div>loading...</div>;

  const role = pathname.split('/')[1] === 'seller' ? 'seller' : 'customer';

  return (
    <StyledOrderDetails>
      <>
        <Navbar
          username={ user.name }
          productPath="/customer/products"
          orderPath="/customer/orders"
        />

        <SellerDetails sale={ sale } sellerName={ seller } role={ role } />

        <div className="product-table-container">
          <ProductTable
            page="order_details"
            userRole={ role }
            products={ products }
          />

          <div className="total-container">
            Total:
            {' '}
            <span
              data-testid={ `${role}_order_details__element-order-total-price` }
            >
              {convertPrice(sale.total_price)}

            </span>
          </div>
        </div>
      </>
    </StyledOrderDetails>
  );
};
export default OrderDetails;
