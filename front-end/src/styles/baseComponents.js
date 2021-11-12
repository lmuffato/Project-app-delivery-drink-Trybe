import styled from 'styled-components';

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
  border-color: ${({ theme }) => theme['dark-light']};
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
