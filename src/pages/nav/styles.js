import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  min-height: calc(100vh - 128px);
  display: flex;
  flex-direction: column;
  max-width: 1144px;
  margin: 128px auto 0;

  > * {
    flex: 1 1 auto;
  }

  > :first-child {
    flex: 0 1 0;
  }
`;

const SearchResult = styled.div`
  margin-top: 54px;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: min-content auto;
  }
`;

export { Container, SearchResult };
