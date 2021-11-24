const PASSWORD_LENGTH = 6;

const validateEntries = (email, password, setDisabled) => {
  const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
  if (validateEmail && password.length >= PASSWORD_LENGTH) {
    setDisabled(false);
  } else { setDisabled(true); }
};

export default validateEntries;
