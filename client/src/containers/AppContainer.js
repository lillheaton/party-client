import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from '../components/Counter';
import Button from '../components/Button';
//import { Router } from 'react-router'

export default class AppContainer extends Component {
    render() {
        const { history, store } = this.props
        return (
            <Provider store={store}>
                <main>
                    {/*<Router history={history} children={routes} />*/}
                    <h1>Hello World!</h1>
                    <Button />
                    <Counter />
                </main>
            </Provider>
        )
    }
} 