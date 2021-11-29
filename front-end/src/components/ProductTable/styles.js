import styled from 'styled-components';

const StyledProductTable = styled.table`
  border-collapse: collapse;
  background-color: white;

  td {
    border-top: 8px solid white;
    border-bottom: 8px solid white;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    font-size: normal;
    font-family: sans-serif;
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  .item {
    background-color: greenyellow;
  }

  .description {
    background-color: lightgray;
    min-width: 300px;
  }

  .quantity {
    background-color: green;
    color: white;
    text-align: center;
    min-width: 100px;
  }

  .unit-value {
    background-color: indigo;
    color: white;
    text-align: center;
    min-width: 100px;
  }

  .sub-total {
    background-color: blue;
    color: white;
    text-align: center;
    min-width: 100px;
  }

  .remove {
    background-color: darkgreen;
  }

  @media (max-width: 768px) {
    .description {
      min-width: unset;
    }

    .quantity {
    min-width: unset;
  }

  .unit-value {
    min-width: unset;
  }

    .sub-total {
      min-width: unset;
    } 
  }
`;

export default StyledProductTable;
