import styled, { css } from 'styled-components';

const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 187px auto;
    align-items: center;
    grid-gap: 0 45px;
  }

  ${({ firstSearch }) =>
    !firstSearch &&
    css`
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    `}
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
  flex: 0 1 64px;

  @media (min-width: 768px) {
    ${({ firstSearch }) =>
      !firstSearch
        ? css`
            margin-bottom: 54px;
          `
        : css`
            margin-bottom: 0;
          `}
  }

  > svg {
    width: 187px;
    height: 43px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  *:first-child {
    flex: 1 1 0;
  }

  *:last-child:not(:first-child) {
    margin-left: 16px;
  }

  @media (min-width: 768px) {
    grid-gap: 0 32px;
  }
`;

export { Container, LogoWrapper, Form };
