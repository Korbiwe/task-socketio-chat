import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import roomReducer from './room';
import userReducer from './user';

const createRootReducer = (history) => combineReducers({
  'router': connectRouter(history),
  'user': userReducer,
  'room': roomReducer,
});

export default createRootReducer;
