const express = require("express");

const cors = require("cors");
const db = require("./config/database.js");
const Router = require("./routes/routes.js");
const RouterUsuerio = require("./routes/routesUsuario.js");

const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());
app.use(Router);
app.use(RouterUsuerio);
//squelize authenticate
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

//server ok
app.get("/ping", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
