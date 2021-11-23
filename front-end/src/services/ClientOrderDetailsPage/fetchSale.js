const fetchSale = async (id) => {
  try {
    const endpoint = `http://localhost:3001/sale/${id}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchSale;
