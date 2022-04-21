const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const workoutController = require('/Users/adamgabriellang/JSDeveloper/solo-project/userController')
const scheduleController = require('./ScheduleController.js')
mongoose.connect('mongodb://localhost:27017/SoloProject')

// app.get('/', (req, res) => {
//   console.log('got')
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post("/", workoutController.createUser, (req, res) => {
  res.status(200).send(res.locals)
})

app.post("/findUsers", workoutController.findUser, (req, res) => {
  res.status(200).send(res.locals)
})


app.post("/createSchedule", scheduleController.createSchedule, (req, res) => {
  res.status(200).send(res.locals)
})

app.post("/findSchedule", scheduleController.findSchedule, (req, res) => {
  res.status(200).send(res.locals)
})

app.listen(port, () => {
  console.log(`Server running ${port}`)
})

