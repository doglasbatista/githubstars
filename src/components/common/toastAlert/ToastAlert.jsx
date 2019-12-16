import React from 'react';
import PropTypes from 'prop-types';

import { Container, Close } from './styles';

const ToastAlert = ({ appearance, children, placement, onDismiss }) => {
  return (
    <Container appearance={appearance} placement={placement}>
      {children}
      <Close onClick={onDismiss}>dismiss</Close>
    </Container>
  );
};

ToastAlert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  appearance: PropTypes.oneOf(['success', 'error']),
  placement: PropTypes.string,
  onDismiss: PropTypes.func,
};

ToastAlert.defaultProps = {
  appearance: 'success',
  placement: '',
  onDismiss: () => {},
};

export default ToastAlert;
