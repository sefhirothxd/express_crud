const Todo = require("../models/todos.js");

// obtener todos los ToDos
const getTodos = async (req, res) => {
  try {
    const school = await Todo.findAll();
    res.send(school);
  } catch (err) {
    console.log(err);
  }
};

// Create un nuevo ToDos
const createTodo = async (req, res) => {
  try {
    console.log(req.body);
    await Todo.create(req.body);
    res.status(201).json({
      message: "Todo Creado",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error al crear el Todo",
    });
  }
};

// Update Todo id
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      res.status(404).send({
        message: `No Todo found with id ${req.params.id}`,
      });
      return;
    }
    await Todo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({
      message: "Todo Updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete todo by id
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      res.status(404).send({
        message: `No todo found with id ${req.params.id}`,
      });
      return;
    }
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({
      message: "Todo Deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
