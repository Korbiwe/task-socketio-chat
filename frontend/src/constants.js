export const ACTIONS = {
  'SET_NICKNAME': 'SET_NICKNAME',
  'JOIN_ROOM': 'JOIN_ROOM',
  'CONNECT': 'CONNECT',
  'CONNECT_FAIL': 'CONNECT_FAIL',
  'CONNECT_SUCCESS': 'CONNECT_SUCCESS',
  'NEW_MESSAGE': 'NEW_MESSAGE',
  'SEND_MESSAGE': 'SEND_MESSAGE',
  'ROOM_UPDATE': 'ROOM_UPDATE',
  'LEAVE_ROOM': 'LEAVE_ROOM',
  'SOCKET_DISCONNECTED': 'SOCKET_DISCONNECTED',
};

export const SOCKET_META = {
  'EMIT': 'socket/EMIT',
};

export const SOCKET_HOST = 'localhost:8081';

export const SOCKET_EVENTS = {
  'MESSAGE': 'message',
  'JOIN_ROOM': 'join',
  'NEW_MESSAGE': 'newMessage',
  'CHANGE_NICKNAME': 'changeNickname',
  'LEAVE_ROOM': 'leave',
};
