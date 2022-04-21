const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const scheduleSchema = new Schema({
  scheduleName: {type: String, required: true},
  schedule: {type: Object, required: true},
  

});

module.exports = mongoose.model('Schedule', scheduleSchema);