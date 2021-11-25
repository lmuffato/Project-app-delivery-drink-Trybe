import React from 'react';
import { string, bool, shape } from 'prop-types';

const ErrorMessage = ({
  className,
  hidden = true,
  'data-testid': testid,
  text,
}) => (
  <div
    className={ className }
    data-testid={ testid }
    hidden={ hidden }
  >
    { text }
  </div>
);

ErrorMessage.propTypes = shape({
  className: string,
  show: bool,
  testid: string,
  text: string,
}).isRequired;

export default ErrorMessage;
