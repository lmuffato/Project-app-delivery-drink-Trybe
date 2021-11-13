export default function validatePassword(password) {
  const PASSWORD_MIN_LENGTH = 6;
  return password.length > PASSWORD_MIN_LENGTH;
}
