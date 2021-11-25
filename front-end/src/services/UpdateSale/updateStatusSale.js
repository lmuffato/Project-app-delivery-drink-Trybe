const { saleEndPointData } = require('../../utils/endPointsData');

const updateStatusSale = async (id, setSale, status) => {
  const { endpoint } = saleEndPointData;
  console.log(id);

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  };

  try {
    const response = await fetch(`${endpoint}/${id}`, requestOptions);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      const { data } = await response.json();
      setSale(data);
    }
  } catch (err) {
    console.log(err);
  }
};

export default updateStatusSale;
