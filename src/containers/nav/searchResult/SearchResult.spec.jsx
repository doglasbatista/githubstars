import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
// import { act } from 'react-dom/test-utils';
import wait from 'waait';

import SearchResult from './SearchResult';
import { GET_STARRED_REPOS } from './SearchResult.queries';

jest.useFakeTimers();

const mocks = [
  {
    request: {
      query: GET_STARRED_REPOS,
      variables: {
        name: 'getify',
      },
    },
    result: {
      data: {
        user: {},
      },
    },
  },
];

describe('<SearchResult />', () => {
  it.skip('renders without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchResult username="getify" />
      </MockedProvider>
    );
    // act(() => jest.runAllTimers());

    await wait(0);
  });
});
