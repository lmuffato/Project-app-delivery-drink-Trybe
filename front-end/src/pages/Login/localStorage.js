export default function checkUser() {
  const user = localStorage.getItem('user');
  if (!user) return false;
  return JSON.parse(user);
}
