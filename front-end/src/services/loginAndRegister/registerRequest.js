const registerEndpoint = 'http://localhost:3001/register';
const statusInvalidData = 409;
const statusRegisterAccept = 201;

const registerRequest = async (userData, setShowErrorMessage, setRedirect) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userData }),
  };

  try {
    const response = await fetch(registerEndpoint, requestOptions);
    if (response.status === statusRegisterAccept) {
      setRedirect(true);
    }
    if (response.status === statusInvalidData) {
      setShowErrorMessage(true);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default registerRequest;
