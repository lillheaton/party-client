import React, { Component } from 'react';
import { Router } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: '/api/graphql' })
});

export default class AppContainer extends Component {
    render() {
        const { history, store, routes } = this.props;
        return (
            <ApolloProvider store={store} client={apolloClient}>
                <main>
                    <Router history={history} children={routes} />
                </main>
            </ApolloProvider>
        );
    }
} 