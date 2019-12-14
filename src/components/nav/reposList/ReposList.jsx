import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../repoItem/RepoItem';

import { Container } from './styles';

const ReposList = ({ list }) => {
  return (
    <Container>
      {list.map(repo => (
        <RepoItem key={repo.node.id} repoData={repo.node} />
      ))}
    </Container>
  );
};

ReposList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        resourcePath: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stargazers: PropTypes.shape({
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ReposList;
