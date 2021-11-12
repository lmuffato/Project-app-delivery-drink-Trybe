const fetchRegister = async (name, email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({ name, email, password }),
  };
  console.log(email, password);
  const response = await fetch('http://localhost:3001/register', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export default fetchRegister;
