const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'./config/.env')})

const VERSION = process.env.VERSION || "1.0.0"
const PORT = process.env.PORT || 3000
const ENV = process.env.ENV || "test"

app.get("/", (req, res) => {
  res.send(`Hello from Kubernetes version : ${VERSION}, ${ENV} environment`)
})

app.get('/healthz', (req, res) => {
  res.status(200).send('Healthz Check Success')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${ENV} environment`)
})