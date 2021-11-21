import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 50px;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
`;

export const NavbarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  flex: 1;
  margin: 0;
  height: 100%;
`;

export const NavbarGroupLinks = styled.div`
  display: flex;
`;

const variants = (variant) => (theme) => {
  switch (variant) {
  case 'primary':
    return {
      activeBg: theme.secondary,
      defaultBg: theme.primary,
      defaultColor: theme.light,
      activeColor: theme.dark,
    };
  case 'secondary':
    return {
      activeBg: theme.primary,
      defaultBg: theme.secondary,
      defaultColor: theme.light,
      activeColor: theme.dark,
    };
  case 'tertiary':
    return {
      activeBg: theme.tertiary,
      defaultBg: theme.tertiary,
      defaultColor: theme.light,
      activeColor: theme.dark,
    };
  case 'quaternary':
    return {
      activeBg: theme.quaternary,
      defaultBg: theme.quaternary,
      defaultColor: theme.light,
      activeColor: theme.dark,
    };
  default: throw new Error('variant not implemented');
  }
};

export const NavItemContainer = styled(NavLink)`
  &, 
  &:hover, 
  &:focus, 
  &:active {
    text-decoration: none;
    color: ${({ theme, variant }) => {
    const currentVariant = variants(variant)(theme);
    return currentVariant.defaultColor;
  }};;
  }
  background-color: ${({ theme, variant }) => {
    const currentVariant = variants(variant)(theme);
    return currentVariant.defaultBg;
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 0 20px;
  cursor: pointer;
  user-select: none;
  &:hover { filter: brightness(1.1) }
  &.active {
    background-color: ${({ theme, variant }) => {
    const currentVariant = variants(variant)(theme);
    return currentVariant.activeBg;
  }};
  color: ${({ theme, variant }) => {
    const currentVariant = variants(variant)(theme);
    return currentVariant.activeColor;
  }};
  }

`;
