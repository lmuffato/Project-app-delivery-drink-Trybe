const formatDate = (date) => {
  const selectDate = date.split('-');
  const year = selectDate[0];
  const month = selectDate[1].length < 1 ? `0${selectDate[1]}` : selectDate[1];
  const day = selectDate[2]
    .split('T')[0].length < 1
    ? `0${selectDate[2].split('T')[0]}`
    : selectDate[2].split('T')[0];

  const fullDate = `${day}/${month}/${year}`;
  return fullDate;
};

export default formatDate;
