import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { userLogin } from '../redux/userSlice';

export default function NavBar(props) {
  const { buttonsList, clientName } = props;
  return (
    <nav>
      <div>
        {buttonsList.map((button, index) => (
          <button type="button" key={ index }>{button.name}</button>
        ))}
      </div>
      <div>
        <button type="button">{clientName}</button>
        <button type="button">Sair</button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  buttonsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  clientName: PropTypes.string.isRequired,
};
