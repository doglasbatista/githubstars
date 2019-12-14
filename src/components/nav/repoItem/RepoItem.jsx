import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from '../../icons/star/Star';

import { Container, Title, Description, RepoInfo, TotalCount } from './styles';

const RepoItem = ({
  repoData: {
    resourcePath,
    description,
    stargazers: { totalCount },
  },
}) => {
  const title = resourcePath
    .substr(1)
    .split('/')
    .join(' / ');

  return (
    <Container>
      <RepoInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TotalCount>
          <StarIcon />
          {totalCount}
        </TotalCount>
      </RepoInfo>
    </Container>
  );
};

RepoItem.propTypes = {
  repoData: PropTypes.shape({
    resourcePath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoItem;
