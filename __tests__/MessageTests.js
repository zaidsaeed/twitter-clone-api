const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Message Tests", () => {
  afterAll(() => {
    request.close();
  });

  it("should get a message", async (done) => {
    const res = await request.get("/messages/1");
    expect(res.statusCode).toEqual(200);
    done();
  });

  it("should not get a message that does not exist", async (done) => {
    const res = await request.get("/messages/1000");
    expect(res.statusCode).toEqual(404);
    done();
  });
});
