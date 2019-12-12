/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledInput, Label, IconWrapper } from './styles';

const Input = ({
  type,
  label,
  id,
  value,
  onFocus,
  onChange,
  icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputIsFilled = Boolean(value);

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  return (
    <Container>
      <StyledInput
        type={type}
        id={id}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
      <Label htmlFor={id} up={inputIsFilled || isFocused}>
        {label}
      </Label>
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </Container>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text']),
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.node,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onFocus: () => {},
  onChange: () => {},
  icon: null,
};

export default Input;
