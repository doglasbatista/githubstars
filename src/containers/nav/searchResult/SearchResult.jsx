import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import UserCard from '../../../components/common/userCard/UserCard';
import ReposList from '../../../components/nav/reposList/ReposList';

import { GET_STARRED_REPOS } from './SearchResult.queries';

import { Container } from './styles';

const SearchResult = ({ username }) => {
  const { loading, data /* , error */ } = useQuery(GET_STARRED_REPOS, {
    variables: { username },
  });

  if (loading) return <div>CARREGANDO...</div>;

  const {
    user: { starredRepositories },
  } = data;

  return (
    <Container>
      <UserCard userData={data.user} />
      <ReposList list={starredRepositories.edges} />
    </Container>
  );
};

SearchResult.propTypes = {
  username: PropTypes.string.isRequired,
};

export default SearchResult;
