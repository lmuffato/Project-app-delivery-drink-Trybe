import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Header({ props }) {
  const { title, name } = props;
  return (
    <header className="header">
      <div className="header-top">
        <p data-testid="page-title" className="page-title">
          {title}
        </p>
        <p data-testid="page-title" className="page-title">
          {name}
        </p>
      </div>
    </header>
  );
}
Header.propTypes = {
  props: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
