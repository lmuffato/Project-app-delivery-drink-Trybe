import React from 'react';

const emailRegex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;

const minimumPasswordLength = 6;
const minimunNameLength = 12;

export const valName = (name) => {
  if (name.length < minimunNameLength) {
    return false;
  }
  return true;
};

export const valEmail = (email) => {
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

export const valPassword = (password) => {
  if (password.length < minimumPasswordLength) {
    return false;
  }
  return true;
};

export const renderError = (error) => {
  if (error) {
    return (
      <p data-testid="common_register__element-invalid_register">
        Erro ao cadastrar
      </p>
    );
  }
  return null;
};

export const validateAll = (name, email, password) => {
  if (valName(name) && valEmail(email) && valPassword(password)) {
    return true;
  }
  return false;
};
