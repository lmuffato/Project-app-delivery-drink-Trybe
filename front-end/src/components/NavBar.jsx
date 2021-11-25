import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function NavBar(props) {
  const { buttonsList, clientName } = props;
  const history = useHistory();
  const location = history.location.pathname.split('/');

  const handleRedirect = (event) => {
    const { value } = event.target;
    const newLocation = `/${location[1]}/${value}`;
    history.push(newLocation);
  };

  const logOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <nav
      className="absolute w-full flex justify-between h-16 top-0
        text-white bg-indigo-600"
    >
      <div className="flex">
        {buttonsList.map((button, index) => (
          <button
            className="w-60 hover:bg-indigo-700"
            type="button"
            key={ index }
            value={ button.value }
            data-testid={ button.testId }
            onClick={ (event) => handleRedirect(event) }
          >
            { button.name }
          </button>
        ))}
      </div>
      <div className="flex">
        <button
          type="button"
          className="w-60 hover:bg-indigo-700"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { clientName }
        </button>
        <button
          type="button"
          className="w-60 hover:bg-indigo-700"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logOut() }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  buttonsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  clientName: PropTypes.string.isRequired,
};
