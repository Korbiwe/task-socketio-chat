import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import io from 'socket.io-client';

import createRootReducer from '../reducers';
import socketClientMiddleware from '../middleware/socketClient';
import {SOCKET_HOST} from '../constants';

export const history = createBrowserHistory();
const socketConnection = io(SOCKET_HOST, {
  'transports': ['websocket'],
  'sync disconnect on unload': true,
});

const initialState = {};
const enhancers = [];

const middleware = [
  socketClientMiddleware(socketConnection),
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

export default store;