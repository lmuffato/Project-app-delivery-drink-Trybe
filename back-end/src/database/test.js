const { User } = require('./models')

const createSales = async () => {
  try{
    const response = await User.findAll()
    // return console.log(response);
  } catch(e) {
    console.log(e)
  }
};

createSales();