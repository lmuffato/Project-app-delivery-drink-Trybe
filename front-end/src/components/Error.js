import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ testeid, children }) {
  console.log(testeid, children);
  return (
    <p data-testid={ testeid }>{ children }</p>
  );
}

Error.propTypes = {
  testeid: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
