import React from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import SearchBar from '../../containers/nav/searchBar/SearchBar';
import SearchResult from '../../containers/nav/searchResult/SearchResult';

import { GET_STARRED_REPOS } from './Nav.queries';
import { ADD_STAR, REMOVE_STAR } from './Nav.mutations';

import { Container } from './styles';

const Nav = () => {
  const [getRepos, { called, loading, data, refetch }] = useLazyQuery(
    GET_STARRED_REPOS
  );
  const [
    addStar,
    { loading: addStarLoading /* , error: addStarError */ },
  ] = useMutation(ADD_STAR);

  const [
    removeStar,
    { loading: removeStarLoading /* , error: removeStarError */ },
  ] = useMutation(REMOVE_STAR);

  const searchRepos = username => {
    getRepos({ variables: { username } });
  };

  const addStarHandler = async ({ repoId, hasStarred }) => {
    if (hasStarred) await removeStar({ variables: { repoId } });
    else await addStar({ variables: { repoId } });
    await refetch();
  };

  const isLoading = (called && loading) || removeStarLoading || addStarLoading;

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
      {isLoading && <span>CARREGANDO...</span>}
      {called && !loading && data && (
        <SearchResult userData={data.user} addStar={addStarHandler} />
      )}
    </Container>
  );
};

export default Nav;
