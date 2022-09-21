const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const Router = require("./routes/routes.js");

const app = express();

app.use(express.json());

app.use(cors());

//squelize authenticate
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(Router);

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
