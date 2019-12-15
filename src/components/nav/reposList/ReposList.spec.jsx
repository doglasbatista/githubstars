import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ReposList from './ReposList';

describe('<ReposList />', () => {
  const repoList = [
    {
      node: {
        id: 'MDEwOlJlcG9zaXRvcnkyMjMyMjA0MzA=',
        shortDescriptionHTML:
          'Babel macro for counting number of lines or words in files at compile time',
        resourcePath: '/coffee-cup/count.macro',
        stargazers: {
          totalCount: 17,
        },
        viewerHasStarred: false,
      },
    },
  ];
  it('renders "Load More" button when hasNextPage is true', () => {
    const container = render(
      <ReposList
        addStar={() => {}}
        fetchMoreData={() => {}}
        hasNextPage
        list={repoList}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('doesn\'t render "Load More" button when hasNextPage is false', () => {
    const container = render(
      <ReposList
        addStar={() => {}}
        fetchMoreData={() => {}}
        hasNextPage={false}
        list={repoList}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls fetchMoreData when user click on "Load More" button', () => {
    const fetchMoreData = jest.fn();
    const { getByText } = render(
      <ReposList
        addStar={() => {}}
        fetchMoreData={fetchMoreData}
        hasNextPage
        list={repoList}
      />
    );

    fireEvent.click(getByText('Load More'));

    expect(fetchMoreData).toHaveBeenCalledTimes(1);
  });
});
