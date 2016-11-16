// model/todo.js

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TodosSchema = new Schema({
  name: String,
  description: String,
  isComplete: false,
})

module.exports = mongoose.model('Todo', TodosSchema)
