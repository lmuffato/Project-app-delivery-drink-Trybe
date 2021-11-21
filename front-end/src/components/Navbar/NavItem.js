import React from 'react';
import PropTypes from 'prop-types';
import { NavItemContainer } from './styles';

function NavItem({ children, testid, variant, to }) {
  return (
    <NavItemContainer
      variant={ variant }
      active={ false }
      data-testid={ testid }
      to={ to }
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
};

NavItem.defaultProps = {
  to: '.',
};

export default NavItem;
