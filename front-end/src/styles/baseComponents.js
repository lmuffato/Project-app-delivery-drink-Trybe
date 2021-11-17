import styled from 'styled-components';

const DARK_LIGHT = 'dark-ligh';

const buttonTheme = (btnType) => (theme) => {
  switch (btnType) {
  case 'primary': return { border: 'none', bg: theme.primary, color: theme.light };
  case 'secondary': return { border: 'none', bg: theme.secondary, color: theme.light };
  case 'tertiary': return { border: theme.primary, bg: 'unset', color: theme.primary };
  default:
    throw new Error('Valor não suportado. Use "primary" | "secondary" | "tertiary"');
  }
};

export const BaseButton = styled.button`
  box-sizing: border-box;
  background-color: ${({ btnType, theme }) => buttonTheme(btnType)(theme).bg};
  color: ${({ btnType, theme }) => buttonTheme(btnType)(theme).color};
  border: ${({ btnType, theme }) => (
    btnType === 'tertiary'
      ? `2px solid ${buttonTheme(btnType)(theme).border}`
      : 'unset')};
  min-width: 160px;
  width: ${(props) => (props.full === true ? '100%' : 'unset')};
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
  font-weight: 6100;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:active {
    filter: brightness(2);
  }
`;

export const InputContainer = styled.div`
  label {
    display: flex;
    flex-flow: column nowrap;
    span {
      font-size: 16px;
      margin: 5px 10px;
    }
  }
`;

export const BaseInput = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  height: 46px;
  border-width: 2px;
  border-color: ${({ theme }) => theme[DARK_LIGHT]};
  border-style: solid;
  font-size: 15px;
  padding: 10px;
  min-width: 150px;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ProductQtyContainer = styled.div`
  --width: 35px;
  --height: 35px;
  --border-radius: 6px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  
  .label {
    font-size: 15.8px;
    margin: 0 5px 5px 5px;
    ${({ theme }) => theme.dark}
  }

  .bts {
    display: flex;
  }

  .add, .center, .remove {
    width: var(--width);
    height: var(--height);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .add, .remove {
    background: ${({ theme }) => theme.primary};
    border: none;
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.light};
    }
    &:hover { filter: brightness(80%); }
    &:active { filter: brightness(120%); }
  }

  .remove {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  .add {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .center {
    border: 1px solid ${({ theme }) => theme[DARK_LIGHT]};
    background-color: ${({ theme }) => theme.light};
    font-size: 15px;
    box-sizing: border-box;
  }

`;

export const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 240px;
  height: 320px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.light};
  transition: box-shadow 0.225s; 
  
  &:hover {
    box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.shadow};
  }

  .product-price {
    position: absolute;
    background-color: ${({ theme }) => theme.light};
    box-sizing: border-box;
    /* border: 1px outset ${({ theme }) => theme[DARK_LIGHT]}; */
    border-radius: 8px;
    font-size: 16px;
    padding: 5px 10px;
    font-weight: bold;
    left: 10px;
    top: 10px;
  }

  .product-image {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    img { 
      height: 100%;
    }
  }

  .product-quantity {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme['light-dark']};
  }
`;
