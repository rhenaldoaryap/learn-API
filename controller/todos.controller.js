const Todo = require("../models/todo.model");

const getAllTodos = async (req, res, next) => {
  let todos;
  try {
    todos = await Todo.getAllTodos();
  } catch (error) {
    return next(error);
  }

  res.json({
    todos: todos,
  });
};

const addTodo = async (req, res, next) => {
  const todoText = req.body.text;

  const todo = new Todo(todoText);

  let insertedId;
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }

  todo.id = insertedId.toString();

  res.json({
    message: "success create new todo",
    createdTodo: todo,
  });
};

const updateTodo = (req, res, next) => {};

const deleteTodo = (req, res, next) => {};

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
