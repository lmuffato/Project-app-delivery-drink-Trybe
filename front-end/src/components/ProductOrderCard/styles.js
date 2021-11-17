import styled from 'styled-components';

const OrderCardContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  max-width: 550px;
  background-color: ${({ theme }) => theme['light-dark']};
  box-sizing: border-box;
  transition: box-shadow 0.15s, width 0.15s;
  box-shadow: 0 0px 2px 0 ${({ theme }) => theme.shadow};

  &:hover {
    box-shadow: 0 5px 12px 0 ${({ theme }) => theme.shadow};
  }
  
  .order-id {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: white;

    .order-label, .order-product-id { margin: 0; text-align: center; }
    .order-label { font-size: 18px; }
    .order-product-id { font-size: 28px; }
  }
  
  .order-info-basic-mcontainer { 
    padding: 5px;
    flex: 1;
  }

  .order-info {
    display: flex;
    flex-flow: column nowrap;
    .order-info-basic {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
    }
    .order-info-adress {
      padding: 10px 5px 10px 5px;
      font-size: 15px;
      overflow-wrap: anywhere;
      text-align: end;
    }
  }
  .order-info-badges {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: space-between;
    .info-badge {
      background-color: white;
      box-sizing: border-box;
      text-align: center;
      border-radius: 6px;
      width: 100%;
      padding-block: 12px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: none;
  } 
`;

export default OrderCardContainer;
