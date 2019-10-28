const PORT = 8081;

const app = require('express')();
const httpServer = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(httpServer);

const handlers = require('./handlers');
const {createUser} = require('./storage');

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));

io.on('connection', (socket) => {
  createUser('', socket.id);
  for (const [eventName, handler] of Object.entries(handlers)) {
    socket.on(eventName, handler(io, socket));
  }
});

httpServer.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
