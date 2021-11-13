const loginEndpoint = 'http://localhost:3001/register';
const statusInvalidData = 400;
const statusRegisterAccept = 201;

const registerRequest = async (userData, setShowErrorMessage, setRedirect) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userData }),
  };

  const response = await fetch(loginEndpoint, requestOptions);
  if (response.status === statusRegisterAccept) {
    setRedirect(true);
  }
  if (response.status === statusInvalidData) {
    setShowErrorMessage(true);
  }
  const data = await response.json();
  console.log(data);
};

export default registerRequest;
