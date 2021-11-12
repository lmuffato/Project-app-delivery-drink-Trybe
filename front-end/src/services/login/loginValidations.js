export const emailVerification = (email) => {
  const regex = /\S+@\S+\.\S+/;
  const result = regex.test(email);
  return result;
};

export const passwordVerification = (password) => {
  const minimumPasswordLength = 5;
  return password.length >= minimumPasswordLength;
};
