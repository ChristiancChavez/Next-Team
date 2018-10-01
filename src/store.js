import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './modules';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';
import { loadState, saveState } from './localStorage';
import { connectRouter, routerMiddleware } from 'connected-react-router'
 
const persistedState = loadState();
export const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(mainReducer),
    persistedState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            logger
        ),
    ),
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;