import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import SearchBar from '../../containers/nav/searchBar/SearchBar';

import { GET_STARRED_REPOS } from './Nav.queries';

import { Container } from './styles';

const Nav = () => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(
    GET_STARRED_REPOS
  );

  const searchRepos = username => {
    loadGreeting({ variables: { username } });
  };

  return (
    <Container>
      <SearchBar
        handleSubmit={searchRepos}
        userData={
          data &&
          data.user && {
            avatarUrl: data.user.avatarUrl,
            username: data.user.name,
          }
        }
      />
      {called && loading && <span>CARREGANDO...</span>}
      {called && !loading && console.log('data ', data)}
    </Container>
  );
};

export default Nav;
