import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './Routes';

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
  <Router>
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
