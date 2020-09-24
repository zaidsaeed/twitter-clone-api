const request = require("supertest");
var app = require("../app");

describe("User Tests", () => {
  it.only("should create a user", async (done) => {
    const res = await request(app)
      .post("/users")
      .send({ username: "heloo", password: "testPass" });
    expect(res.statusCode).toEqual(200);
    done();
  });
});
