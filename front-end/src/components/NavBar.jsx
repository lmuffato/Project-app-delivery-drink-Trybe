import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { userLogin } from '../redux/userSlice';

export default function NavBar(props) {
  const { buttonsList, clientName } = props;
  const history = useHistory();
  const location = history.location.pathname.split('/');

  const handleRedirect = (event) => {
    location[location.length - 1] = event.target.value;
    history.push(location.join('/'));
  };

  return (
    <nav className="flex justify-between h-16 top-0 text-white bg-indigo-600">
      <div className="flex">
        {buttonsList.map((button, index) => (
          <button
            className="w-60 hover:bg-indigo-700"
            type="button"
            key={ index }
            value={ button.value }
            onClick={ (event) => handleRedirect(event) }
          >
            { button.name }
          </button>
        ))}
      </div>
      <div className="flex">
        <button type="button" className="w-60 hover:bg-indigo-700">{clientName}</button>
        <button type="button" className="w-60 hover:bg-indigo-700">Sair</button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  buttonsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  clientName: PropTypes.string.isRequired,
};
