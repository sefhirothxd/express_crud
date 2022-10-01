const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const Router = require("./routes/routes.js");
const RouterUsuerio = require("./routes/routesUsuario.js");

const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());

//squelize authenticate
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

//server ok
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(Router);
app.use(RouterUsuerio);

module.exports = app;
