import { getUserEndpoint } from '../../utils/endPointsData';

const getAllUsers = async () => {
  try {
    const response = await fetch(getUserEndpoint.endpoint);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default getAllUsers;
