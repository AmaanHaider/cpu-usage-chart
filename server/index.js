const http = require('http');
const os = require('os-utils');
require('dotenv').config();
const cors = require("cors");

const PORT = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running');
});

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling'],
  cors: {
    origin: process.env.CLIENT_URL
  }
});

let tick = 0;

io.on('connection', (client) => {
  const cpuInterval = setInterval(() => {
    os.cpuUsage((cpuPercent) => {
      client.emit('cpu', {
        name: tick++,
        value: cpuPercent
      });
    });
  }, 1500);

  client.on('disconnect', () => {
    clearInterval(cpuInterval); 
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
