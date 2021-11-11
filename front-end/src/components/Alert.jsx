import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/Alert.module.scss';

export default function Alert({ type, message, dataTestId }) {
  return (
    <div className={ `${styles[type]} ${styles.Alert}` } data-testid={ dataTestId }>
      { message }
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  dataTestId: PropTypes.string,
};

Alert.defaultProps = {
  type: '',
  dataTestId: '',
};
