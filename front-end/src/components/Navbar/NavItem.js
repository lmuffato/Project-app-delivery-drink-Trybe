import React from 'react';
import PropTypes from 'prop-types';
import { NavItemContainer } from './styles';

function NavItem({ children, onClick, testid, variant, to }) {
  return (
    <NavItemContainer
      variant={ variant }
      data-testid={ testid }
      to={ to }
      onClick={ onClick }
    >
      {children}
    </NavItemContainer>
  );
}

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']).isRequired,
  testid: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  to: '.',
  onClick: () => {},
};

export default NavItem;
