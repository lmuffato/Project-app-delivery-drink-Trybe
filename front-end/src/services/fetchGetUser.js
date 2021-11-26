const fetchGetUser = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    mode: 'cors',
  };

  const response = await fetch('http://localhost:3001/users', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export default fetchGetUser;
