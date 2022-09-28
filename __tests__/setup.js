const request = require("supertest");
const app = require("../app.js");

before(async () => {
  // create user
  const payload = {
    nombres: "test",
    apellidos: "test",
    edad: 11,
    correo: "test@gmail.com",
    password: "123456789",
  };
  await request(app).post("/auth/register").send(payload);
});
