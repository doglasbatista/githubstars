import React, { useState } from 'react';

import SearchBar from '../../containers/nav/searchBar/SearchBar';
import SearchResult from '../../containers/nav/searchResult/SearchResult';

import { Container } from './styles';

const Nav = () => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [username, setUsername] = useState('');

  const searchRepos = name => {
    setUsername(name);
    setShowSearchResult(true);
  };

  return (
    <Container>
      <SearchBar handleSubmit={searchRepos} />
      {showSearchResult && <SearchResult username={username} />}
    </Container>
  );
};

export default Nav;
