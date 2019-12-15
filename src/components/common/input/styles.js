import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import {
  primaryColor,
  neutralColor,
  neutralColorLight,
  black,
  white,
} from '../../../colors';

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 6px;
  outline: none;
  transition: 0.2s ease-in;

  &:focus {
    transition: 0.2s ease-in;
    border-color: ${primaryColor};
    border-width: 2px;
  }

  ${({ variant }) => {
    if (variant === 'outlined') {
      return css`
        border: 1px solid ${lighten(0.1, black)};
        height: 91px;
        border-radius: 5px;
        padding-left: 34px;
      `;
    }

    return css`
      border: none;
      border-bottom: 1px solid ${neutralColorLight};
      height: 45px;
    `;
  }}
`;

const Label = styled.label`
  font-size: 16px;
  color: ${neutralColor};
  position: absolute;
  pointer-events: none;
  transition: 0.3s ease all;

  ${({ variant }) => {
    if (variant === 'outlined') {
      return css`
        bottom: auto;
        top: 50%;
        transform: translateY(-50%);
        left: 34px;
      `;
    }
    return css`
      left: 6px;
      bottom: 8px;
    `;
  }}

  ${({ up, variant }) =>
    up && variant === 'outlined'
      ? css`
          top: 0;
          background-color: ${white};
          color: ${lighten(0.2, neutralColor)};
        `
      : up &&
        css`
          bottom: 36px;
          color: ${lighten(0.2, neutralColor)};
        `}
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
`;

export { Container, StyledInput, Label, IconWrapper };
