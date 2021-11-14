const postRequest = async (userData, callbacks, endpointData) => {
  const { setShowErrorMessage, setRedirect } = callbacks;
  const { endpoint, statusInvalid, statusRegisterAccept } = endpointData;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userData }),
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (response.status === statusRegisterAccept) {
      setRedirect(true);
    }
    if (response.status === statusInvalid) {
      setShowErrorMessage(true);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default postRequest;
