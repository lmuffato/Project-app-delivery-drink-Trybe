const validateEntries = (entries) => {
const { totalPrice, deliveryAddress, deliveryNumber, status } = entries;
  if (!totalPrice || !deliveryAddress || !deliveryNumber || !status) {
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
