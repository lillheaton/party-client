import React, { Component } from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Welcome from '../components/Welcome';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

//import { Router } from 'react-router'
const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: '/api/graphql' })
});

export default class AppContainer extends Component {
    render() {
        const { history, store } = this.props;
        return (
            <ApolloProvider store={store} client={apolloClient}>
                <main>
                    {/*<Router history={history} children={routes} />*/}
                    <h1>Hello World!</h1>
                    <Welcome />
                    <Button />
                    <Counter />
                </main>
            </ApolloProvider>
        );
    }
} 