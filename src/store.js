import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import mainReducer from './modules';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(mainReducer),
  persistedState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      logger,
    ),
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
