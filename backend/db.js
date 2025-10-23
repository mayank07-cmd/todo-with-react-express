const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mayank:mayankbisht@cluster0.hzt8bid.mongodb.net/todo_project')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}   