import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
background-color: #036B52;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /10);
z-index: 10;
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

&:hover{
  color: #ffffff82;
}
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color: #256c;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606
  }
`;
