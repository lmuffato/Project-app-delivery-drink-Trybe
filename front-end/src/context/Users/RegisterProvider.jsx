import React, { useState } from 'react';
import { object } from 'prop-types';
import RegisterContext from './RegisterContext';

export default function RegisterProvider({ children }) {
  const [register, setRegister] = useState({ fullName: '', email: '', password: '' });

  const context = {
    register,
    setRegister,
  };
  return (
    <RegisterContext.Provider value={ context }>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: object,
}.isRequired;
