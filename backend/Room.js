module.exports = class Room {
  constructor(name) {
    this.name = name;
    this._users = [];
  };

  get users() {
    return this._users.map(user => user.nameWithId);
  }

  addUser(user) {
    this._users.push(user);
  };

  tryDeleteUser(socketId) {
    // Not a good piece of code, but it's fine for what we're trying to accomplish.
    let i = this._users.length;
    console.log(this.name);
    console.dir(this._users);
    while (i--) {
      if (this._users[i].socketId === socketId) {
        this._users.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  tryRenameUser(socketId, newNickname) {
    let i = this._users.length;
    while (i--) {
      if (this._users[i].socketId === socketId) {
        this._users[i].name = newNickname;
        return true;
      }
    }
    return false;
  }
};
