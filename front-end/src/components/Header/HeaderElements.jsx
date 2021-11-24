import styled, { keyframes } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const slice = keyframes`

`;

export const Nav = styled.nav`
  background-color: hsl(0, 0%, 20%);
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}
.left-container, .right-container {
  display: flex;
  justify-content: space-between;
}
  h1, a{
    font-family: 'Maven Pro', sans-serif;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #ffffff82;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color: hsl(0, 1%, 10%);
  padding: 18px 10px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
