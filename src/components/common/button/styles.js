import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { primaryColorDarken, white } from '../../../colors';

const buttonsVariants = {
  filled: {
    base: {
      backgroundColor: primaryColorDarken,
      borderColor: primaryColorDarken,
      color: white,
    },
    hover: {
      backgroundColor: darken(0.1, primaryColorDarken),
      borderColor: darken(0.1, primaryColorDarken),
    },
  },
  ghost: {
    base: {
      backgroundColor: 'transparent',
      borderColor: primaryColorDarken,
      color: primaryColorDarken,
    },
    hover: {
      backgroundColor: lighten(0.45, primaryColorDarken),
      borderColor: primaryColorDarken,
      color: primaryColorDarken,
    },
  },
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: ${({ buttonType }) =>
    buttonsVariants[buttonType].base.backgroundColor};
  border-color: ${({ buttonType }) =>
    buttonsVariants[buttonType].base.borderColor};
  color: ${({ buttonType }) => buttonsVariants[buttonType].base.color};
  width: 100%;
  padding: 12px;
  text-align: center;
  border-radius: 5px;
  max-width: 100%;
  transition: 0.2s ease-in;
  outline: none;

  :hover,
  :focus {
    transition: 0.2s ease-in;
    background-color: ${({ buttonType }) =>
      buttonsVariants[buttonType].hover.backgroundColor};
    border-color: ${({ buttonType }) =>
      buttonsVariants[buttonType].hover.borderColor};
    color: ${({ buttonType }) => buttonsVariants[buttonType].hover.color};
  }
`;

export default ButtonWrapper;
