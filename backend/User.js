module.exports = class User {
  constructor(name, socketId) {
    this.name = name;
    this.socketId = socketId;
  }

  get nameWithId() {
    return `${this.name} (${this.socketId.substring(0, 6)})`
  }
};
