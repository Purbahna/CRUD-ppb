const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  Description: {
      type: String,
      required: true
},
  Completed: {
      type: Boolean,
      required: true,
      
}
}, {timestamps: true});

const tasks = mongoose.model('tasks', taskSchema);
module.exports = tasks;
