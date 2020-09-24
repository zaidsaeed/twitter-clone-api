const request = require("supertest");
const app = require("../app");

describe("Message Tests", () => {
  it("should get a message", async (done) => {
    const res = await request(app).get("/messages/1");
    expect(res.statusCode).toEqual(200);
    done();
  });
});
