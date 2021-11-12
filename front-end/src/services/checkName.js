const MINIMUM_LENGTH_FOR_NAME = 12;
const checkName = (name) => {
  if (!name) return false;
  if (name.length <= MINIMUM_LENGTH_FOR_NAME) return false;
  return true;
};

export default checkName;
