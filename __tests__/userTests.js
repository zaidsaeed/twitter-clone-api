const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("User Tests", () => {
  afterAll(() => {
    request.close();
  });

  it("should create a user", async (done) => {
    const res = await request
      .post("/users")
      .send({ username: "heloo", password: "testPass" });
    expect(res.statusCode).toEqual(200);
    done();
  });
});
