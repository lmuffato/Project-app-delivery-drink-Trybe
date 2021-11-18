const update = require('../../services/update');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  const updatedUser = await update(
    'users',
    { id },
    { name, email, password, role },
  );
  
  res.status(200).json(updatedUser);
};
