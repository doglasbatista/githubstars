import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../repoItem/RepoItem';

import { Container } from './styles';

const ReposList = ({ list, addStar }) => {
  return (
    <Container>
      {list.map(repo => (
        <RepoItem key={repo.node.id} repoData={repo.node} addStar={addStar} />
      ))}
    </Container>
  );
};

ReposList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        resourcePath: PropTypes.string.isRequired,
        shortDescriptionHTML: PropTypes.string.isRequired,
        stargazers: PropTypes.shape({
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
  addStar: PropTypes.func.isRequired,
};

export default ReposList;
