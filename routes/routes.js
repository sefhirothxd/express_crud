const express = require("express");
// Import School Controller
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.js");

// Init express router
const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

//export
module.exports = router;
