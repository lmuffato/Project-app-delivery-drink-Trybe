export default function validateEmail(email) {
  const regex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
  return regex.test(email);
}
