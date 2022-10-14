const app = require("./app.js");

port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
