const postRequest = async (userData, callbacks, endpointData) => {
  const { setShowErrorMessage, setRole } = callbacks;
  const { endpoint, statusInvalid } = endpointData;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userData }),
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) {
      if (response.status === statusInvalid) setShowErrorMessage(true);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      const { user: { name, email, role }, token } = await response.json();
      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
      setRole(role);
    }
  } catch (err) {
    console.log(err);
  }
};

export default postRequest;
