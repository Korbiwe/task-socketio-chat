import {ACTIONS} from '../constants';

const initialState = {
  'name': '',
  'messages': [],
  'users': [],
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.JOIN_ROOM:
      return {...state, 'name': action.roomName};
    case ACTIONS.NEW_MESSAGE:
      const {sender, body, datetime} = action;
      return {...state, 'messages': [...state.messages, {sender, body, datetime}]};
    case ACTIONS.ROOM_UPDATE:
      const {users} = action;
      return {...state, users};
    case ACTIONS.LEAVE_ROOM:
      return initialState;
    default:
      return state;
  }
};

export default roomReducer;
