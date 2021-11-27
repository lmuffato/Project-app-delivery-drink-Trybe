import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { AiOutlineLogout } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Nav, NavLink, NavBtnLink } from './HeaderElements';
import CheckoutContext from '../../context/checkoutContext';

export default function HeaderAdmin(props) {
  const history = useHistory();
  const { setAux } = useContext(CheckoutContext);

  const { name } = props;

  function logout() {
    localStorage.clear();
    history.push('/');
    setAux([]);
  }
  return (
    <Nav>
      <div className="left-container">
        <NavLink
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h1>Meus Usuários</h1>
        </NavLink>
      </div>
      <div className="right-container">
        <NavLink
          data-testid="customer_products__element-navbar-user-full-name"
          to="#"
        >
          {name}
        </NavLink>
        <NavBtnLink
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          <AiOutlineLogout />
        </NavBtnLink>
      </div>
    </Nav>
  );
}

HeaderAdmin.propTypes = {
  name: PropTypes.string.isRequired,
};
