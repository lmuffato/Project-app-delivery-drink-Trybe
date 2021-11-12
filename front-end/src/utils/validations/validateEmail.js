export default function validateEmail(email) {
  // const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  return (regexEmail.test(String(email).toLowerCase()));
}
