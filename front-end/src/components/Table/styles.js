import styled from 'styled-components';

const TableContainer = styled.div`
  --number-col-width: 100px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
  }

  .secondary {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.dark};
  }

  .secondary-2 {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};
  }

  .tertiary {
    background: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.light};
  }

  .quaternary {
    background: ${({ theme }) => theme.quaternary};
    color: ${({ theme }) => theme.light};
  }

  .row_id { width: 20px; }
  .row_quantity { width: var(--number-col-width);}
  .row_unit_value { width: var(--number-col-width);}
  .row_subtotal {width: var(--number-col-width);}
  .row_remove_bnt {
    width: 150px;
    position: relative;
    button {
      width: 100%;
      position: absolute;
      border: none;
      font-size: inherit;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;
      &:hover { filter: invert(5%); }
      &:active { filter: brightness(120%); }
    }
  }

  td {
    text-align: center;
  }

  tbody tr {
    margin-bottom: 10px;
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
