import React, { useCallback, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { useToasts } from 'react-toast-notifications';

import SearchBar from '../../containers/nav/searchBar/SearchBar';
import SearchResult from '../../containers/nav/searchResult/SearchResult';
import SaveUserToken from '../../containers/nav/saveUserToken/SaveUserToken';

import Loading from '../../components/common/loading/Loading';
import UserNotFound from '../../components/nav/userNotFound/UserNotFound';

import { GET_STARRED_REPOS } from './Nav.queries';
import { ADD_STAR, REMOVE_STAR } from './Nav.mutations';

import { getAccessToken, destroyAccessToken } from '../../utils/utils';

import { Container } from './styles';

const Nav = () => {
  const { addToast } = useToasts();
  const [userHasAccessToken, setUserHasAccessToken] = useState(
    getAccessToken()
  );
  const [
    getRepos,
    { error, called, loading, networkStatus, data, refetch, fetchMore },
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

  const addNotification = ({ appearance, text } = { appearance: 'success' }) =>
    addToast(text, {
      appearance,
      placement: 'bottom-center',
      autoDismiss: true,
    });

  const addStarHandler = async ({ repoId, hasStarred }) => {
    if (hasStarred) {
      await removeStar({ variables: { repoId } });
      addNotification({ text: 'Repo unstarred with success!' });
    } else {
      await addStar({ variables: { repoId } });
      addNotification({ text: 'Repo starred with success!' });
    }
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

  const treatUnauthorized = () => {
    addNotification({
      text: 'Unauthorized. Logging out...',
      appearance: 'error',
    });
    setUserHasAccessToken(false);
    destroyAccessToken();
  };

  if (userHasAccessToken && error && error.message.includes('401')) {
    treatUnauthorized();
  }

  const showSearchResult =
    called &&
    (!loading || (loading && networkStatus === 3) || networkStatus === 4) &&
    data;

  return (
    <Container>
      {userHasAccessToken && (
        <SearchBar
          firstSearch={called}
          handleSubmit={searchRepos}
          userData={
            data &&
            data.viewer && {
              avatarUrl: data.viewer.avatarUrl,
              username: data.viewer.login,
            }
          }
        />
      )}
      {!userHasAccessToken && (
        <SaveUserToken callback={() => setUserHasAccessToken(true)} />
      )}
      {isLoading && <Loading />}
      {showSearchResult && (
        <SearchResult
          userData={data.user}
          addStar={addStarHandler}
          fetchMoreData={fetchMoreData}
          hasNextPage={hasNextPage}
        />
      )}
      {userHasAccessToken && called && !loading && !data && <UserNotFound />}
    </Container>
  );
};

export default Nav;
