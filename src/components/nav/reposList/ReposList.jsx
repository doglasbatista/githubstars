import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../repoItem/RepoItem';
import Button from '../../common/button/Button';

import { Container } from './styles';

const ReposList = ({ list, addStar, fetchMoreData, hasNextPage }) => {
  return (
    <Container>
      {list.map(repo => (
        <RepoItem key={repo.node.id} repoData={repo.node} addStar={addStar} />
      ))}
      {hasNextPage && <Button onClick={fetchMoreData}>Load More</Button>}
    </Container>
  );
};

ReposList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        resourcePath: PropTypes.string.isRequired,
        shortDescriptionHTML: PropTypes.string.isRequired,
        stargazers: PropTypes.shape({
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
  addStar: PropTypes.func.isRequired,
  fetchMoreData: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};

export default ReposList;
