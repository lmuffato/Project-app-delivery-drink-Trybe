const validateEntries = (entries) => {
  const { name, price, url_image } = entries;
  if (!name || !price || !url_image) {
    return {
      status: 404,
      message: "Entries not found",
    };
  }
  return true;
};

module.exports = {
  validateEntries,
}
