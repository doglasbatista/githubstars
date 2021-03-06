import styled from 'styled-components';

const Container = styled.div`
  margin: 54px 0 100px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 24px 0;

  @media (min-width: 768px) {
    grid-template-columns: min-content auto;

    > :first-child {
      margin-top: 32px;
      max-height: 531px;
    }
  }
`;

export { Container }; // eslint-disable-line
