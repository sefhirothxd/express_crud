const express = require("express");
// Import School Controller
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.js");

const authenticated = require("../middlewares/auth.js");

// Init express router
const router = express.Router();

router.get("/todos", authenticated, getTodos);

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

//export
module.exports = router;
