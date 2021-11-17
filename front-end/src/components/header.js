import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Header({ props }) {
  const { title, subtitle, name } = props;
  const history = useHistory();
  return (
    <header className="header">
      <div className="header-top">
        <button
          data-testid="customer_products__element-navbar-link-products"
          className="page-title"
          type="button"
        >
          {title}
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          className="page-title"
          type="button"
        >
          {subtitle}
        </button>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="page-title"
        >
          {name}
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          className="page-title"
          type="button"
          onClick={ () => { localStorage.clear(); history.push('/'); } }
        >
          SAIR
        </button>
      </div>
    </header>
  );
}
Header.propTypes = {
  props: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
