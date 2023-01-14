const express = require('express')
const cors = require('cors')
const app = express()
const codeService = require('./services/code.service.js')
const path = require('path')
const { socketServer } = require('./socket')
const dotenv = require('dotenv')
dotenv.config()

const { client } = require('./DB-mongo/db.connection.js')
const { initDB } = require('./DB-mongo/db-init.js')


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')))
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
  }
  app.use(cors(corsOptions))
}


app.use(express.json())

//list
app.get('/api/code', (req, res) => {
  codeService.query()
    .then((codes) => {
      res.send(codes)
    }).catch((err) => {
      console.log('Had issues getting codes', err);
      res.status(400).send({ msg: 'Had issues getting codes' })
    });
})

app.get('/api/code/:codeId', (req, res) => {
  const { codeId } = req.params

  codeService.get(codeId)
    .then(code => {
      res.send(code)
    })
    .catch(err => {
      console.log('Had issues getting code', err);
      res.status(400).send({ msg: 'Had issues getting code' })
    })
})

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030;

client.connect()
  .then(async () => {
    // await initDB()
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`)
    })
  })


