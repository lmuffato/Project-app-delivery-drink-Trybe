import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllOrdersByCustomer } from '../services/endpointsAPI';

import Navbar from '../Components/NavBar';
import UserContext from '../context/userContext';
import NewOrderContext from '../context/NewOrderContext';

import '../Styles/CustomerOrders.css';

const dataTestid33 = 'customer_orders__element-order-id-';
const dataTestid34 = 'customer_orders__element-delivery-status-';
const dataTestid35 = 'customer_orders__element-order-date-';
const dataTestid36 = 'customer_orders__element-card-price-';

export default function CustomerOrder() {
  const { userData } = useContext(UserContext);
  const { userId } = useContext(NewOrderContext);
  const [orders, setOrders] = useState([]);

  // Acrescenta zeros a direita do número, como 50 => 0050.
  const addZerosOnRightSide = (num) => {
    const zeros = 4;
    const newNum = String(num).padStart(zeros, '0');
    return newNum;
  };

  // Converte a data do banco de dados no formato brasileiro dd/mm/yy.
  const convertDateToBrasilShape = (data) => {
    const now = new Date(data);
    const str = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    console.log(str);
    return str;
  };

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${Number(value)}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  const renderTags = (obj) => {
    const { id, status, saleDate, totalPrice, index } = obj;
    return (
      <div key={ index }>
        <Link to={ `/customer/orders/${id} ` }>
          <div className="cardContainer">

            <span data-testid={ `${dataTestid33}-${id}` } className="pedido">
              { addZerosOnRightSide(id) }
            </span>

            <span data-testid={ `${dataTestid34}-${id}` } className="status">
              { status }
            </span>

            <span data-testid={ `${dataTestid35}-${id}` } className="status">
              { convertDateToBrasilShape(saleDate) }
            </span>

            <span data-testid={ `${dataTestid36}-${id}` } className="moment">
              { convertValueToBrlShape(totalPrice) }
            </span>

          </div>
        </Link>
      </div>
    );
  };

  const getAllOrdes = async () => {
    const { token } = userData;
    const response = await getAllOrdersByCustomer(token, userId);
    setOrders(response);
  };

  useEffect(() => {
    getAllOrdes();
  }, []);

  const renderCustomerOrders = () => {
    if (orders.length !== 0 || orders !== undefined) {
      return (
        orders.map((ele, index) => {
          const obj = {
            id: ele.id,
            status: ele.status,
            saleDate: ele.saleDate,
            totalPrice: ele.totalPrice,
            index,
          };
          return renderTags(obj);
        })
      );
    }
  };

  return (
    <div>
      <Navbar />
      <h3>Meus pedidos</h3>
      { renderCustomerOrders() }
    </div>
  );
}
