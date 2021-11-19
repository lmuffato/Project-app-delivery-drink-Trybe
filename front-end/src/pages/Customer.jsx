import React from 'react';
// import { useStore } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { userLogin } from '../redux/userSlice';
import NavBar from '../components/NavBar';

export default function Customer() {
  const buttonsList = [
    { name: 'PRODUTOS',
      value: 'products',
      testId: 'customer_products__element-navbar-link-products',
    },
    { name: 'MEUS PEDIDOS',
      value: 'orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  // const history = useHistory();
  // const [userEmail, setUserEmail] = useState('');
  // const store = useStore();
  // const username = store.getState().user.name;
  const username = 'Fulana';

  return (
    <div className="w-screen flex flex-col h-full">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
    </div>
  );
}
