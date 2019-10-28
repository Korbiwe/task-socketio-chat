const {
  addUserToRoom,
  changeUserNickname,
  findUserById,
  deleteUser,
  findOrCreateRoom
} = require('./storage');


module.exports.message = (io, socket) => ({message, roomName}) => {
  const currentUser = findUserById(socket.id);
  io.to(roomName).emit('newMessage', {'sender': currentUser.nameWithId, 'body': message, 'datetime': Date.now()});
};

module.exports.join = (io, socket) => ({roomName}) => {
  const room = addUserToRoom(socket.id, roomName);
  // using room.name just in case there are some special rules like case-(in)sensitivity in the future.
  socket.join(room.name);
  // we're both sending to the channel and providing the name of the room in case our clients are
  // in two or more rooms simultaneously. to(room.name) provides no context to the client, it
  // only determines who receives the message.
  console.dir(room.users);
  io.to(room.name).emit('roomUpdate', {'roomName': room.name, 'users': room.users});
};

module.exports.changeNickname = (io, socket) => ({nickname}) => {
  const affectedRooms = changeUserNickname(socket.id, nickname);
  affectedRooms.forEach((room) => {
    io.to(room.name).emit('roomUpdate', {'roomName': room.name, 'users': room.users});
  });
};

module.exports.disconnect = (io, socket) => () => {
  const affectedRooms = deleteUser(socket.id);
  affectedRooms.forEach((room) => {
    io.to(room.name).emit('roomUpdate', {'roomName': room.name, 'users': room.users});
  })
};

module.exports.leave = (io, socket) => ({roomName}) => {
  const room = findOrCreateRoom(roomName);
  room.tryDeleteUser(socket.id);
  io.to(room.name).emit('roomUpdate', {'roomName': room.name, 'users': room.users});
};
