export const setToLocalStorage = (key, element) => {
  const { login, email } = element;
  const { name, role, token } = login;
  const data = { name, email, role, token };
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = (key) => {
  const localLenght = localStorage.length;
  if (localLenght < 1) return;
  return JSON.parse(localStorage.getItem(key));
};

// name, email, role, token

/* export const setToLocalStorage = (key, element) => localStorage
  .setItem(key, JSON.stringify(element)); */
