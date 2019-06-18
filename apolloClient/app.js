import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink, split } from "apollo-boost";

import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import { Router, browserHistory } from 'react-router';
import routes from './router';
import { ApolloProvider } from 'react-apollo';

const httpLink = new HttpLink({
    uri: "http://localhost:3000/graphql"
  });
  
const wsLink = new WebSocketLink({
    uri: `ws://localhost:3000/subscriptions`,
    options: {
        reconnect: true,
        timeout: 30000
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({ link, cache: new InMemoryCache() });


render(
    <ApolloProvider client={client}>
       <Router history={browserHistory} routes={routes} />
    </ApolloProvider>, 
    document.currentScript.ownerDocument.getElementById('root')
);