const checkEmail = (email) => {
  if (!email) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false;
  }
  return true;
};

export default checkEmail;
