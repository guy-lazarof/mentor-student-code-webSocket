const express = require('express')
const app = express()
const http = require("http")
const cors = require('cors')
const path = require('path')
const { Server } = require('socket.io')
const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

const uri = process.env.URI;

const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')))
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
  }
  app.use(cors(corsOptions))
}

const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }

  const db = client.db('codeDB');
  const collection = db.collection('codesCollection');

  io.on('connection', (socket) => {

    socket.on('getData', () => {
      collection.find({}).toArray((err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        socket.emit('data', data);
      });
    });
  });
});

io.on('connection', (socket) => {
  console.log(`A user connected ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`A user disconnected  ${socket.id}`);
  });
})

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.listen(3001, () => {
  console.log(`App listening on port 3001!`)
})
