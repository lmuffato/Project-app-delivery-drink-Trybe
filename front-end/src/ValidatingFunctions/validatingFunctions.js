const validateInputsRegister = ({ name, email, password } = { name: '', email: '', password: ''} ) => {
  const emailRegex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
  const minimunLengthPassword = 6;
  const minimunLengthName = 12;
  if (!name || !email || !password) {
    return true; 
  } else {
    console.log(!(name.length >= minimunLengthName && password.length >= minimunLengthPassword && emailRegex.test(email)));
    return (!(name.length >= minimunLengthName && password.length >= minimunLengthPassword && emailRegex.test(email)));
  }
  
};

export default validateInputsRegister;
