const loginEndpoint = 'http://localhost:3001/register';
const statusInvalidData = 400;

const registerRequest = async (name, email, password, setShowErrorMessage) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  };

  const response = await fetch(loginEndpoint, requestOptions);
  if (response.status === statusInvalidData) {
    setShowErrorMessage(true);
  }
  const data = await response.json();
  console.log(data);
};

export default registerRequest;
