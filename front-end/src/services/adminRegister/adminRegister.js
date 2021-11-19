const { registerEndpointData } = require('../../utils/endPointsData');

const { CONFLICT_STATUS, CREATED_STATUS } = require('../../utils/statusCodes');

const adminRegister = async (request, setStatus) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  };

  try {
    const response = await fetch(registerEndpointData.endpoint, requestOptions);
    if (!response.ok) {
      if (response.status === CONFLICT_STATUS) setStatus(CONFLICT_STATUS);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      setStatus(CREATED_STATUS);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default adminRegister;
