const HTTP_UNAUTHORIZED_STATUS = 401;

module.exports = async (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({
      message: 'You are not authorized to perform this action',
    });
  }
  next();
};