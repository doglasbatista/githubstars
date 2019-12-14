import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 187px auto;
    align-items: center;
    grid-gap: 0 45px;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  > svg {
    width: 187px;
    height: 43px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 64px;
  align-items: center;
  grid-gap: 0 16px;
  @media (min-width: 768px) {
    grid-gap: 0 32px;
  }
`;

export { Container, LogoWrapper, Form };
