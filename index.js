const express = require('express')
const { json } = require('body-parser')
const logger = require('./logger')

const config = { port: process.env.PORT || 80 }

const app = express()

app.use(json())
app.use(logger)

app.get('/message', (req, res) => {
  res.status(200).json({
    message: {
      title: "Hello World!",
      description: "This is a message description.",
      actions: [
        { label: "I accept", type: 11, id: 111 },
        { label: "Reject", type: 13, id: 222 },
        { label: "Show Options", type: 12, id: 333 }
      ]
    },
    uuid: 'cfa454f8-635b-43e5-b6ba-1fbff7e56fa9',
    ...req.query
  })
})

app.post('/action/:type', (req, res) => {
  res.status(200).json({
    uuid: 'cfa454f8-635b-43e5-b6ba-1fbff7e56fa9',
    euconsent: 'BOnf5gkOnf5gkAGABBENCm-AAAAqWADABUADQAUg',
    ...req.body
  })
})

app.listen(config.port, () => console.log(`AMP - listening on port ${config.port}`))