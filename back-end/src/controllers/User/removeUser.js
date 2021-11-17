const remove = require('../../services/delete');

module.exports = async (req, res) => {
  const { id } = req.params;

  await remove(
    'users',
    { id },
  );
  
  res.status(204).end();
};
