const fetchAllProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  const result = await response.json();
  return result;
};

export default fetchAllProducts;
