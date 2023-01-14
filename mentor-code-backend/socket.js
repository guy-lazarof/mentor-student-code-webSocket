const WebSocket = require('ws')

module.exports = {
  socket
}
function socket() {

  const wss = new WebSocket.Server({ port: 3000 });
  wss.on('connection', function connection(ws) {
    console.log('A new client connected');
    ws.send('Welcome new client!!!');
    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('Got your msg its' + message);
    });

  });


}
