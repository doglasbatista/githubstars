import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './styles';

const Button = ({ children, buttonType, onClick }) => {
  return (
    <ButtonWrapper type="button" buttonType={buttonType} onClick={onClick}>
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
};

Button.defaultProps = {
  buttonType: 'filled',
  onClick: () => {},
};

export default Button;
