const MINIMUM_LENGTH_FOR_PASSWORD = 6;

const checkPassword = (password) => {
  if (!password) return false;
  if (password.length < MINIMUM_LENGTH_FOR_PASSWORD) {
    return false;
  }
  return true;
};

export default checkPassword;
