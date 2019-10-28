const Room = require('./Room');
const User = require('./User');

// We use an object here as it is faster to access a hash-map by key that it is to go through an array.
const rooms = {};
const users = {};

module.exports.findUserById = (socketId) => {
  return users[socketId] || null;
};

module.exports.deleteUser = (socketId) => {
  delete users[socketId];

  const affectedRooms = [];

  for (const [index, room] of Object.entries(rooms)) {
    if (room.tryDeleteUser(socketId)) affectedRooms.push(room);
    if (room.length === 0) {
      delete rooms[index];
    }
  }
  return affectedRooms;
};

module.exports.findOrCreateRoom = (name) => {
  if (!(name in rooms)) {
    rooms[name] = new Room(name);
  }
  return rooms[name];
};

module.exports.addUserToRoom = (socketId, roomName) => {
  const room = this.findOrCreateRoom(roomName);
  const user = this.findUserById(socketId);
  room.addUser(user);
  return room;
};

module.exports.createUser = (nickname, socketId) => {
  users[socketId] = new User(nickname, socketId);
};

module.exports.changeUserNickname = (socketId, newNickname) => {
  users[socketId].name = newNickname;
  // this is not the best solution admittedly, but i can't think of anything better considering the structure
  // of this interaction.
  const affectedRooms = [];
  for (const [name, room] of Object.entries(rooms)) {
    if (room.tryRenameUser(socketId, newNickname)) affectedRooms.push(room);
  }
  return affectedRooms;
};
