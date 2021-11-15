import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from '../../Contexts/User/userContext';

function Header({ links }) {
  const { user } = useContext(UserContext);

  const onExit = () => { };

  return (
    <header>
      {links.map((link, i) => (
        <Link
          to={ link.url }
          key={ `header${i}` }
          data-testid={ `${link.testId}` }
        >
          {link.name}
        </Link>
      ))}
      <div data-testid="customer_products__element-navbar-user-full-name">
        {user.name}
      </div>
      <Link to="/login" data-testid="customer_products__element-navbar-link-logout">
        <button type="button" onClick={ () => onExit() }>
          Sair
        </button>
      </Link>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}.required;

export default Header;
