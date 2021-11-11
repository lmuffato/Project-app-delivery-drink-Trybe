const validateEntries = (entries) => {
const { name, totalPrice, deliveryAdress, deliveryNumber, status } = entries;
  if (!name || !totalPrice || !deliveryAdress || !deliveryNumber || status) {
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
