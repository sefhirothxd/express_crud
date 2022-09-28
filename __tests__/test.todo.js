const request = require("supertest");
const chai = require("chai");
const app = require("../app.js");
// const User = require("../models/user.js");
const getToken = require("./utils.js");
const Todo = require("../models/todos.js");
const { before } = require("mocha");

const { expect } = chai;

describe("Test the Todo endpoints", () => {
  let token;
  let todo1;
  let todo2;

  before(async () => {
    token = await getToken();
    console.log("token", token);
    todo1 = await Todo.create({
      nombre: "todo1",
    });
    todo2 = await Todo.create({
      nombre: "todo2",
    });
  });
  it("should retrieve all the Todos", async () => {
    const { body, status } = await request(app)
      .get("/todos")
      .set("Authorization", `Bearer ${token}`);
    console.log(body);
    expect(status).to.equal(200);
    expect(body).to.be.a("array");
    expect(body.length).to.equal(2);
  });
  it("should allow to create Todo", async () => {
    const payload = {
      nombres: "todo1",
    };
    const { body, status } = await request(app).post("/todos").send(payload);
    console.log(body);
    expect(status).to.equal(201);
  });

  it("should allow to update Todo", async () => {
    const payload = {
      nombres: "probando",
    };
    const { body, status } = await request(app)
      .put(`/todos/${todo1.id}`)
      .send(payload);
    console.log(body);
    expect(status).to.equal(204);
  });

  it("should allow to delete Todo", async () => {
    const { body, status } = await request(app)
      .delete(`/todos/${todo2.id}`)
      .send();
    console.log(body);
    expect(status).to.equal(204);
  });
});
