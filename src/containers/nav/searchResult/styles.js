import styled from 'styled-components';

const Container = styled.div`
  margin-top: 54px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 24px 0;
  @media (min-width: 768px) {
    grid-template-columns: min-content auto;
  }
`;

export { Container }; // eslint-disable-line
