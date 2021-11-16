import React from 'react';

const minimumPasswordLength = 6;
const minimunNameLength = 12;

export const valName = (name) => {
  if (name.length < minimunNameLength) {
    return false;
  }
  return true;
};

export const valEmail = (email) => {
  const emailRegex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  return emailRegex.test(email);
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

export const validateLogin = (email, password) => {
  if (valEmail(email) && valPassword(password)) {
    return true;
  }
  return false;
};

export const saveUserDataToLocalStorage = ({ name, email, role, token }) => {
  localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
};

export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const calcCartTotal = (cart) => cart
  .reduce((acc, prod) => acc + (Number(prod.price) * prod.quantity), 0);
