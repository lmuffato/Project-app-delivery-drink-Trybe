export default function validateEmail(email) {
  const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  return regex.test(email);
}
