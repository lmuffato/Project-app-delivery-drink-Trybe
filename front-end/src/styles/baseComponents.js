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

/**
 * @typedef {{full?: boolean, btnType: 'primary' | 'secondary' | 'tertiary'}}
 * CustomButton
 * */

export const BaseButton = (
  /** @type {import('styled-components').ThemedStyledFunction<'button', any, CustomButton>} */
  (styled.button)`
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
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:active {
    filter: brightness(2);
  }
`);

export const x = 10;
