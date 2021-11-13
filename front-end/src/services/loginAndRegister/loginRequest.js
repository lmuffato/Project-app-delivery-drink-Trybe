const loginEndpoint = 'http://localhost:3001/login';
const statusNotFound = 404;
const statusLoginAccept = 200;

const loginRequest = async (email, password, setShowErrorMessage, setRedirect) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(loginEndpoint, requestOptions);
  if (response.status === statusLoginAccept) {
    setRedirect(true);
  }
  if (response.status === statusNotFound) {
    setShowErrorMessage(true);
  }
  const data = await response.json();
  console.log(data);
};

export default loginRequest;
