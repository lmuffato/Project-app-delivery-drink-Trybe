const maxLength = 10;

const formatDate = (date) => {
  const selectDate = date.substr(0, maxLength).split('-');
  const stringReverse = selectDate.reverse().join('/');
  return stringReverse;
};

export default formatDate;
