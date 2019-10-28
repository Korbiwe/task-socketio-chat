import {ACTIONS} from '../constants';

const userReducer = (state = {'nickname': ''}, action) => {
  switch (action.type) {
    case ACTIONS.SET_NICKNAME:
      return {...state, 'nickname': action.nickname};
    default:
      return state;
  }
};

export default userReducer;
