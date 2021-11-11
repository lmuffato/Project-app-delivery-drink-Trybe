const services = require('../service');
const { isPasswordsEqual } = require('../encrypt/bcrypt');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await services.login(email, password);

    if (login.message) {
      return res.status(login.code).json({ message: login.message });
    }
    
   /*  const checkPassword = */ await isPasswordsEqual(password, login.password);
    // console.log(checkPassword); //false
    // if(!checkPassword) {
    //   return res.status(400).json({ message: 'Invalid username or passwords' });
    // }

    return res.status(200).json({ message: 'successful login' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = loginUser;
