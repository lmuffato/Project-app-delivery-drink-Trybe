import styled from 'styled-components';

const TableContainer = styled.div`
  --number-col-width: 100px;
  padding: 20px;
  border-collapse: collapse;
  max-width: 1000px;
  margin: 0 auto;
  
  h2 {
    margin: 5px 0;
  }

  table {
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.shadow};
    width: 100%;
    padding: 10px;
  }

  .row_quantity, .row_unit_value,
  .row_subtotal, .row_remove_bnt {
    color: ${({ theme }) => theme.light};
  }

  .row_id, .row_remove_bnt { background-color: ${({ theme }) => theme.secondary}; }
  .row_id, .row_description { color: ${({ theme }) => theme.dark}; }

  .row_id {
    width: 20px;
  }
  .row_description { background-color: ${({ theme }) => theme['light-dark']}; }
  .row_quantity { 
    background-color: ${({ theme }) => theme.primary};
    width: var(--number-col-width);
  }
  .row_unit_value { 
    background-color: ${({ theme }) => theme.tertiary};
    width: var(--number-col-width);
  }

  .row_subtotal {
    background-color: ${({ theme }) => theme.quaternary};
    width: var(--number-col-width);
  }

  .row_remove_bnt {
    width: 150px;
    position: relative;
    button {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  td {
    text-align: center;
  }

  tbody td {
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }

  .row-container {
    overflow-x: scroll;
  }
`;

export default TableContainer;
