const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, path.join(__dirname, '../..', 'public')),
  filename: (req, _file, callback) => {
    const { name } = req.params;
    return callback(null, `${name}.jpg`); 
  },
});

const uploadImages = multer({ storage });

module.exports = uploadImages;
