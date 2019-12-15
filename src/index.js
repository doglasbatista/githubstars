import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Nav from './pages/nav/Nav';

import { getAccessToken } from './utils/utils';

import './reset.css';

const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
      },
    });
  },
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Nav />
  </ApolloProvider>,
  document.getElementById('root')
);
