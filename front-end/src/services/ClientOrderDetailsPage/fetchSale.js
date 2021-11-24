import { saleEndPointData } from '../../utils/endPointsData';

const { endpoint } = saleEndPointData;

const fetchSale = async (id) => {
  try {
    const response = await fetch(`${endpoint}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchSale;
