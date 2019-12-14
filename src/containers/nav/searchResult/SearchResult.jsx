import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../../../components/common/userCard/UserCard';
import ReposList from '../../../components/nav/reposList/ReposList';

import { Container } from './styles';

const SearchResult = ({ userData }) => {
  return (
    <Container>
      <UserCard userData={userData} />
      <ReposList list={userData.starredRepositories.edges} />
    </Container>
  );
};

SearchResult.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string,
    organizations: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })
      ),
    }),
    starredRepositories: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            resourcePath: PropTypes.string.isRequired,
            shortDescriptionHTML: PropTypes.string.isRequired,
            stargazers: PropTypes.shape({
              totalCount: PropTypes.number.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }),
  }).isRequired,
};

export default SearchResult;
