import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-size: 14px;
  width: 100%;
  height: 45px;
  padding: 6px;
  border: none;
  border-bottom: 1px solid #bababa;
  outline: none;
`;

const Label = styled.label`
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 6px;
  bottom: 8px;
  transition: 0.3s ease all;

  ${({ up }) =>
    up &&
    css`
      bottom: 36px;
      opacity: 0.6;
    `}
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
`;

export { Container, StyledInput, Label, IconWrapper };
