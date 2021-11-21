const validateAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role === 'administrator') return next();
  return res.status(401).json({ message: 'User dont have permission' });
};

module.exports = validateAdmin;
