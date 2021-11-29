import styled from 'styled-components';

const StyledProductItem = styled.div`
  border: 1px solid #c5c5c5;
  width: 10rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  margin-bottom: 1.3rem;

  transition: all 0.2s;
  border-radius: 0.4rem;
  overflow: hidden;

  text-align: center;

  img {
    width: 50%;
  }

  .info-product-container {
    background-color: #e5e5e5;
    width: 100%;
    height: 50%;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .product-name {
    font-weight: 600;
    font-family: sans-serif;
    font-size: 0.8rem;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 0.2rem;
    color: black;
  }

  .product-price {
    font-weight: 700;
    font-family: sans-serif;
    color: black;

    position: absolute;
    bottom: 32px;
    left: 63px;
  }

  .quantity-buttons {
    position: absolute;
    bottom: 5px;
    left: 30px;
  }

  .quantity-buttons button {
    padding: 0.2rem 0.5rem;
    border-radius: 50%;
    background-color: #ccc;
    color: white;

    margin:0 0.3rem;
    cursor: pointer;

    transition: all 0.2s;
  }

  .quantity-buttons button:hover {
    transform: scale(1.2);
    background-color: var(--orange);
  }

  input {
    width: 30px;
    text-align: center;
    font-weight: bold;
    color: black;
    background-color: #e5e5e5;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export default StyledProductItem;
