import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { verifyUserExistance } from '../utils/LocalStorageFunctions';
import NavBar from '../components/NavBar';
import getUrlServer from '../utils/getServerUrl';

require('dotenv').config();
console.log(process.env.URL_SERVER);

function CustomerOrders() {
  const [clientOrders, setClientOrders] = useState([]);
  const user = verifyUserExistance();
  const history = useHistory();
  if (!user) history.push('/login');
  const { token, id } = user;
  useEffect(() => {
    const getClientOrders = async (userId, userToken) => {
      const headers = { Authorization: userToken };
      const orders = await axios.get(`${getUrlServer()}/sales/${userId}`, { headers });
      return orders;
    };
    setClientOrders(getClientOrders(id, token));
  }, []);
  return (
    <div>
      <NavBar />

    </div>
  );
}

export default CustomerOrders;
