import styled from 'styled-components';

const StyledOrderDetails = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .product-table-container {
    width: fit-content;
    margin: 0 auto;
    background-color: white;
    padding: 1rem;
    border: 1px solid #f5f5f5;
    border-radius: 0.2rem;
  }

  .total-container {
    display: flex;
    justify-content: flex-end;

    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export default StyledOrderDetails;
