import React from 'react';
import { useLocation } from 'react-router';
import LinkProducts from './LinkProducts';
import LinkOrders from './LinkOrders';
import UserFullName from './UserFullName';
import LinkLogout from './LinkLogout';
import LinkManagerUsers from './LinkManagerUsers';
import './styles.css';

function NavBar() {
  const path = useLocation().pathname;

  const renderLink = () => {
    if (path.includes('customer')) {
      return (
        <div>
          <LinkProducts />
          <LinkOrders />
        </div>
      );
    }

    if (path.includes('seller')) {
      return (
        <LinkOrders />
      );
    }

    if (path.includes('admin')) {
      return (
        <LinkManagerUsers />
      );
    }
  };

  return (
    <div className="c_navbar">
      { renderLink() }
      <div>
        <UserFullName />
        <LinkLogout />
      </div>
    </div>
  );
}

export default NavBar;
