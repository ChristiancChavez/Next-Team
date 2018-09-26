import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';

const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;
