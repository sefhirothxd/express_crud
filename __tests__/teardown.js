const db = require("../config/database.js");

after(async () => {
  await db.close();
});
