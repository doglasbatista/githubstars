import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './styles';

const Button = ({ children, buttonType, onClick, type }) => {
  return (
    <ButtonWrapper type={type} buttonType={buttonType} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  buttonType: PropTypes.oneOf(['filled', 'ghost']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  buttonType: 'filled',
  onClick: () => {},
  type: 'button',
};

export default Button;
