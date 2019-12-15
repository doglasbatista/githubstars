import React, { useCallback } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import SearchBar from '../../containers/nav/searchBar/SearchBar';
import SearchResult from '../../containers/nav/searchResult/SearchResult';
import Loading from '../../components/common/loading/Loading';
import UserNotFound from '../../components/nav/userNotFound/UserNotFound';

import { GET_STARRED_REPOS } from './Nav.queries';
import { ADD_STAR, REMOVE_STAR } from './Nav.mutations';

import { Container } from './styles';

const Nav = () => {
  const [
    getRepos,
    { called, loading, networkStatus, data, refetch, fetchMore },
  ] = useLazyQuery(GET_STARRED_REPOS, {
    notifyOnNetworkStatusChange: true,
  });
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

  const hasNextPage =
    data?.user?.starredRepositories?.pageInfo?.hasPreviousPage;

  const fetchMoreData = useCallback(() => {
    const {
      user: {
        starredRepositories: {
          pageInfo: { startCursor },
        },
      },
    } = data;

    fetchMore({
      variables: { beforeId: startCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          ...prev,
          user: {
            ...prev.user,
            starredRepositories: {
              ...prev.user.starredRepositories,
              edges: [
                ...prev.user.starredRepositories.edges,
                ...fetchMoreResult.user.starredRepositories.edges,
              ],
              pageInfo: {
                ...prev.user.starredRepositories.pageInfo,
                ...fetchMoreResult.user.starredRepositories.pageInfo,
              },
            },
          },
        };
      },
    });
  }, [data, fetchMore]);

  const isLoading = (called && loading) || removeStarLoading || addStarLoading;

  const showSearchResult =
    called && (!loading || (loading && networkStatus === 3)) && data;

  return (
    <Container>
      <SearchBar
        firstSearch={called}
        handleSubmit={searchRepos}
        userData={
          data &&
          data.user && {
            avatarUrl: data.user.avatarUrl,
            username: data.user.name,
          }
        }
      />
      {isLoading && <Loading />}
      {showSearchResult && (
        <SearchResult
          userData={data.user}
          addStar={addStarHandler}
          fetchMoreData={fetchMoreData}
          hasNextPage={hasNextPage}
        />
      )}
      {called && !loading && !data && <UserNotFound />}
    </Container>
  );
};

export default Nav;
