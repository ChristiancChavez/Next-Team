import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import store, { history } from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(

  // eslint-disable-next-line react/jsx-filename-extension
  <Root store={store} history={history} />,
  rootElement,
);
registerServiceWorker();
