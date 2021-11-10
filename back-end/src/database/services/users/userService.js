const validateEntries = (entries) => {
  const { name, email, password, role } = entries;
  if (!name || !email || !password || !role) {
    return {
      status: 404,
      message: "Entries not found",
    };
  }
  // return {
  //   status: 200,
  //   message: entries,
  // };
  return true;
};

module.exports = {
  validateEntries,
}
