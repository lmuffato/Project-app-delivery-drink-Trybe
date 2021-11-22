export const emailVerification = (email) => {
  const regex = /\S+@\S+\.\S+/;
  const result = regex.test(email);
  return result;
};

export const passwordVerification = (password, isAdmin) => {
  const PASSWORD_LENGTH = 5;
  if (isAdmin) return password.length > PASSWORD_LENGTH;

  return password.length >= PASSWORD_LENGTH;
};

export const nameVerification = (password) => {
  const minimumPasswordLength = 11;
  return password.length >= minimumPasswordLength;
};
