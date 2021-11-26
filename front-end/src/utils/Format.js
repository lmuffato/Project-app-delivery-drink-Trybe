const dateFormatation = (data) => {
  const YMD = data.split('T')[0];
  const i = YMD.split('-');
  const [y, m, d] = i;
  const DMY = `${d}/${m}/${y}`;
  return DMY;
};

export const priceFormat = (price) => {
  const formatedPrice = price.replace('.', ',');
  return formatedPrice;
};

export default dateFormatation;
