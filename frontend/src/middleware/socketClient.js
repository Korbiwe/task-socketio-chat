import {newMessage, roomUpdate} from '../actions';
import {SOCKET_META} from '../constants';

const listeners = {
  'newMessage': newMessage,
  'roomUpdate': roomUpdate
};

const socketClientMiddleware = (connection) => (store) => (next) => (action) => {
  for (const [event, listener] of Object.entries(listeners)) {
    if (!connection.hasListeners(event)) {
      connection.on(event, (data) => store.dispatch(listener(data)));
    }
  }

  if (action.socketMeta === undefined) {
    // skip all actions without the 'meta' attribute
    return next(action);
  }

  switch (action.socketMeta) {
    case SOCKET_META.EMIT:
      if (connection !== null) {
        connection.emit(action.event, action.payload);
        return next(action);
      } else {
        return next(action);
      }
    default:
      return next(action);
  }
};

export default socketClientMiddleware;
