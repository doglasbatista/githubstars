import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import UserCard from '../../../components/common/userCard/UserCard';

import { GET_STARRED_REPOS } from './SearchResult.queries';

import { Container } from './styles';

const SearchResult = ({ username }) => {
  const { loading, data /* , error */ } = useQuery(GET_STARRED_REPOS, {
    variables: { username },
  });

  if (loading) return <div>CARREGANDO...</div>;

  return (
    <Container>
      <UserCard userData={data.user} />
    </Container>
  );
};

SearchResult.propTypes = {
  username: PropTypes.string.isRequired,
};

export default SearchResult;
