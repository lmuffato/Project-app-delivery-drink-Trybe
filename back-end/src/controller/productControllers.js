const testToken = (req, res) => {
  const { user } = req.user;
  return res.status(200).json({ message: 'vc esta autenticado', user });
};

module.exports = testToken;
