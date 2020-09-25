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

  it("should edit a message; change message string", async (done) => {
    const init = await request.get("/messages/1");
    expect(JSON.parse(init.text).messageText).toEqual("MESSGE TEXT");
    const res = await request.put("/messages/1").send({ messageText: "MESSF" });
    expect(res.statusCode).toEqual(200);
    const after = await request.get("/messages/1");
    expect(JSON.parse(after.text).messageText).toEqual("MESSF");
    done();
  });

  it("should edit a message; change message user to a valid user", async (done) => {
    const init = await request.get("/messages/1");
    expect(JSON.parse(init.text).username).toEqual("emre@smith.com");
    const res = await request.put("/messages/1").send({ username: "tony" });
    expect(res.statusCode).toEqual(200);
    const after = await request.get("/messages/1");
    expect(JSON.parse(after.text).username).toEqual("tony");
    done();
  });

  it("should not update a message with an invalid user", async (done) => {
    const res = await request
      .put("/messages/1")
      .send({ username: "invalid_user" });
    expect(res.statusCode).toEqual(500);
    done();
  });
});
