import testIDs from '../../datatestids.json';

const NUMBER_OF_DIGITS = 4;
export const leftPad = (number) => String(number).padStart(NUMBER_OF_DIGITS, '0');
export const getTestID = (ID) => testIDs[ID];
export const formatTestID = (ID, index) => {
  if (testIDs[ID].includes('<id>')) return testIDs[ID].replace('<id>', index);
  return testIDs[ID].replace('<index>', index);
};
export const formatPrice = (value) => new Intl.NumberFormat('pt-BR',
  { style: 'currency', currency: 'BRL' }).format(value);
export const formatDate = (value) => new Intl
  .DateTimeFormat('pt-BR').format(new Date(value));
