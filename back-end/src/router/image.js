const { Router } = require('express');

const path = require('path');

const router = Router();

router.get(':file', (req, res) => {
  const { file } = req.params;
  res.sendFile(path.resolve(__dirname, `../../public/${file}`));
});

module.exports = router;
