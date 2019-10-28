import {ACTIONS, SOCKET_META, SOCKET_EVENTS} from '../constants'

export const setNickname = (nickname) => ({
  'type': ACTIONS.SET_NICKNAME,
  'nickname': nickname,
  'socketMeta': SOCKET_META.EMIT,
  'event': SOCKET_EVENTS.CHANGE_NICKNAME,
  'payload': {
    'nickname': nickname,
  }
});

export const joinRoom = (roomName) => ({
  'type': ACTIONS.JOIN_ROOM,
  'roomName': roomName,
  'socketMeta': SOCKET_META.EMIT,
  'event': SOCKET_EVENTS.JOIN_ROOM,
  'payload': {
    'roomName': roomName,
  }
});

export const leaveRoom = (roomName) => ({
  'type': ACTIONS.LEAVE_ROOM,
  'socketMeta': SOCKET_META.EMIT,
  'event': SOCKET_EVENTS.LEAVE_ROOM,
  'payload': {
    'roomName': roomName,
  },
});

export const sendMessage = (message, roomName) => ({
  'type': ACTIONS.SEND_MESSAGE,
  'message': message,
  'socketMeta': SOCKET_META.EMIT,
  'event': 'message',
  'payload': {
    'message': message,
    'roomName': roomName,   // in case we support multiple in the future.
  }
});

export const newMessage = ({sender, body, datetime}) => ({
  'type': ACTIONS.NEW_MESSAGE,
  sender, body, datetime
});

export const roomUpdate = ({users}) => ({
  'type': ACTIONS.ROOM_UPDATE,
  users,
});

export const socketDisconnected = () => ({
  'type': ACTIONS.SOCKET_DISCONNECTED,
});
