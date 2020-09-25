const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Message Tests", () => {
  afterAll(() => {
    request.close();
  });

  it("should get a message", async (done) => {
    const res = await request.get("/messages/1");

    const expectedOutput = {
      id: 1,
      messageText: "MESSGE TEXT",
    };
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.text).messageText).toEqual(
      expectedOutput.messageText
    );
    expect(JSON.parse(res.text).id).toEqual(expectedOutput.id);
    done();
  });

  it("should not get a message that does not exist", async (done) => {
    const res = await request.get("/messages/1000");
    expect(res.statusCode).toEqual(404);
    done();
  });

  it("should create a message with a valid user", async (done) => {
    const res = await request
      .post("/messages")
      .send({ username: "emre@smith.com", messageText: "MESSF" });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.text).username).toEqual("emre@smith.com");
    expect(JSON.parse(res.text).messageText).toEqual("MESSF");
    done();
  });

  it("should create a message with an invalid user", async (done) => {
    const res = await request
      .post("/messages")
      .send({ username: "invalid_user", messageText: "MESSF" });
    expect(res.statusCode).toEqual(500);
    done();
  });
});
