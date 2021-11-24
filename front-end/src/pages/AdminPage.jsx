import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import AdmForm from '../components/admForm/admForm';

export default function AdminPage({ location }) {
  return (
    <div>
      <NavBar location={ location } />
      <AdmForm />
    </div>
  );
}

AdminPage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};
