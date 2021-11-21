import React from 'react';
import PropTypes from 'prop-types';
import { NavItemContainer } from './styles';

function NavItem({ children, testid, variant, active }) {
  return (
    <NavItemContainer
      variant={ variant }
      active={ active }
      data-testid={ testid }
    >
      {children}
    </NavItemContainer>
  );
}

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']).isRequired,
  testid: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
