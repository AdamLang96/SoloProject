const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const controller = require('/Users/adamgabriellang/JSDeveloper/solo-project/userController')
mongoose.connect('mongodb://localhost:27017/SoloProject')

// app.get('/', (req, res) => {
//   console.log('got')
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.post("/", controller.createUser, (req, res) => {
  res.status(200).send(req.body)
})

app.listen(port, () => {
  console.log(`Server running ${port}`)
})

