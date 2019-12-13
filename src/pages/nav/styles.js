import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  max-width: 1144px;
  margin: 128px auto 0;
`;

const SearchResult = styled.div`
  margin-top: 54px;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: min-content auto;
  }
`;

export { Container, SearchResult };
