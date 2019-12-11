import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './Routes';

import './reset.css';

const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
