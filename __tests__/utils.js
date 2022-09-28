const request = require("supertest");
const app = require("../app.js");

async function getToken() {
  const payload = {
    correo: "test@gmail.com",
    password: "123456789",
  };
  const { body } = await request(app).post("/auth/login").send(payload);
  return body.token;
}

module.exports = getToken;
