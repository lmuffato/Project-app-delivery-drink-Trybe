const userKey = 'user';

export function getUser() {
  const user = localStorage.getItem(userKey);
  if (user === null) return {};
  return JSON.parse(user);
}

export function saveUser(user) {
  const { name, email, role, token } = user;
  localStorage.setItem(userKey, JSON.stringify({ name, email, role, token }));
}

export function deleteUser() {
  localStorage.removeItem(userKey);
}
