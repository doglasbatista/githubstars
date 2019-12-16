import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Nav from './pages/nav/Nav';

import ToastAlert from './components/common/toastAlert/ToastAlert';

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
    <ToastProvider components={{ Toast: ToastAlert }} placement="bottom-left">
      <Nav />
    </ToastProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
