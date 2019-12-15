import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RepoItem from './RepoItem';

describe('<RepoItem />', () => {
  it('called addStar when user click on star button', () => {
    const addStarMock = jest.fn();
    const repoId = 'MDEwOlJlcG9zaXRvcnkxNDM2MzQ0MjA=';
    const { getByText } = render(
      <RepoItem
        addStar={addStarMock}
        repoData={{
          id: repoId,
          shortDescriptionHTML:
            '<g-emoji class="g-emoji" alias="unicorn" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f984.png">🦄</g-emoji> The Enterprise™ programming language',
          resourcePath: '/joaomilho/Enterprise',
          viewerHasStarred: false,
          stargazers: {
            totalCount: 1231,
          },
        }}
      />
    );
    const addStarButton = getByText('star');

    fireEvent.click(addStarButton);

    expect(addStarMock).toHaveBeenCalledTimes(1);
    expect(addStarMock).toHaveBeenCalledWith({
      repoId,
      hasStarred: false,
    });
  });

  it('renders button with "unstar" text when user already has starred this repo', () => {
    const viewerHasStarred = true;

    const { getByText } = render(
      <RepoItem
        addStar={() => {}}
        repoData={{
          id: 'MDEwOlJlcG9zaXRvcnkxNDM2MzQ0MjA=',
          shortDescriptionHTML:
            '<g-emoji class="g-emoji" alias="unicorn" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f984.png">🦄</g-emoji> The Enterprise™ programming language',
          resourcePath: '/joaomilho/Enterprise',
          viewerHasStarred,
          stargazers: {
            totalCount: 1231,
          },
        }}
      />
    );

    expect(getByText('unstar')).toBeInTheDocument();
  });
});
