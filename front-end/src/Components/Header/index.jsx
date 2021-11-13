import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Header({ links }) {
  const { user } = useContext(UserContext);

  const onExit = () => { };

  return (
    <header>
      {links.map((link, i) => (
        <Link to={ link.url } key={ `header${i}` }>
          {link.name}
        </Link>
      ))}
      {user.name}
      <Link to="/login">
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
