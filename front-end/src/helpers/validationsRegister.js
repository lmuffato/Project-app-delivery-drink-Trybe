const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const minPasswordLength = 6;
const minNameLength = 15;
// const ERROR_CONFLICT = 409;
export const validations = (name, email, password) => {
  if (!emailRegex.test(email) || password.length < minPasswordLength
  || name.length < minNameLength) {
    return false;
  }
  return true;
};

export const handleError = (error) => {
  if ((error.toString()).includes('409')) {
    return 'Usuário já cadastrado';
  }
};
