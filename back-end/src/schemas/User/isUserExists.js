module.exports = async ({ name, email }, service) => {
  const findUserByName = await service('users', { name });
  const findUserByEmail = await service('users', { email });
  const findUserByNameOrEmail = findUserByName || findUserByEmail;

  const message = { message: 'User already exists' };

  if (findUserByNameOrEmail.length > 0) return { message, status: 409 };

  return {};
};