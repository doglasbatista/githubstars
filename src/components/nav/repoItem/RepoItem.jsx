import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from '../../icons/star/Star';

import Button from '../../common/button/Button';

import {
  Container,
  Title,
  Description,
  RepoInfo,
  TotalCount,
  RepoActions,
} from './styles';

const RepoItem = ({
  repoData: {
    resourcePath,
    shortDescriptionHTML,
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
        <Description
          dangerouslySetInnerHTML={{
            __html: shortDescriptionHTML,
          }}
        />
        <TotalCount>
          <StarIcon />
          {totalCount}
        </TotalCount>
      </RepoInfo>
      <RepoActions>
        <Button buttonType="ghost">star</Button>
      </RepoActions>
    </Container>
  );
};

RepoItem.propTypes = {
  repoData: PropTypes.shape({
    resourcePath: PropTypes.string.isRequired,
    shortDescriptionHTML: PropTypes.string.isRequired,
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoItem;
