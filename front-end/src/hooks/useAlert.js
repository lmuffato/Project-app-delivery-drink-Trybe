import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Element from '../components/Alert';

export default function useAlert(timeout) {
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const defaultTimeout = 5000;
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, timeout || defaultTimeout);
    }
  }, [showAlert, timeout]);

  const Alert = ({ dataTestId }) => (
    <Element
      type={ alertType }
      message={ alertMessage }
      show={ showAlert }
      dataTestId={ dataTestId }
    />
  );

  Alert.propTypes = {
    dataTestId: PropTypes.string,
  };

  Alert.defaultProps = {
    dataTestId: '',
  };

  return {
    Alert,
    alertMessage: setAlertMessage,
    alertType: setAlertType,
    isVisible: showAlert,
    showAlert: setShowAlert,
  };
}
