const fetchLogin = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch('http://localhost:3001/login', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export default fetchLogin;
