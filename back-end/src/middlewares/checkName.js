const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Invalid entries. Name is missing' });
    if (name.length <= 12) {
      return res.status(400).json({ message: 'Invalid entries. Name has wrong format' });
    }
    return next();
  };
  
module.exports = {
  checkName,
};
