import styled from 'styled-components';

const StyledTotalButton = styled.button`
  padding: 1rem;
  width: 250px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5rem;
  background: var(--orange);

  .product-list-container {
    background-color: #000;
  }

  &:hover {
    background-color: var(--orange);
    color: white;
  }

`;

export default StyledTotalButton;
