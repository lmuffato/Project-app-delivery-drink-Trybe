const loginRequest = async (email, password, setShowErrorMessage) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  try {
    const url = 'http://localhost:3001/login';
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    if (data.message === 'Not Found') {
      setShowErrorMessage(true);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default loginRequest;
