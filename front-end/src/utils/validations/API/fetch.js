const loginAction = async ({ email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    const loginToken = await rawResponse.json();
    return loginToken;
  } catch (error) {
    return null;
  }
};

export default loginAction;
