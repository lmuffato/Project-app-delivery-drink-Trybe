const postRequest = async (userData, callbacks, endpointData) => {
  const { setShowErrorMessage, setRedirect } = callbacks;
  const { endpoint, statusInvalid, statusRegisterAccept } = endpointData;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userData }),
  };

  const response = await fetch(endpoint, requestOptions);
  if (response.status === statusRegisterAccept) {
    setRedirect(true);
  }

  if (response.status === statusInvalid) {
    setShowErrorMessage(true);
  }

  const data = await response.json();

  localStorage.setItem('user', JSON.stringify({
    name: data.user.name,
    email: data.user.email,
    role: data.user.role,
    token: data.token,
  }));
};

export default postRequest;
