const Schedule = require('./scheduleModel');


const scheduleController = {};


scheduleController.createSchedule =  (req, res, next) => {
    try {
        Schedule.create(req.body, (err, doc)=> {
            console.log(req.body.schedule)
          next()
        });
    } catch(e) {
      console.log('error', e)
      next(e)
    }
  };
  
  scheduleController.findSchedule =  (req, res, next) => {
  
    try {
        Schedule.find(req.body, (err, docs) => {
         console.log(docs)
         res.locals = docs
        next()
      })
  
    } catch(e) {
      console.log('error', e)
      next(e)
    }
  }
  module.exports = scheduleController





