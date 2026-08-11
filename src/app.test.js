const request = require("supertest");
const app = require("./app");

test("GET /health -> 200", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
});

test("GET /sum/2/3 -> 5", async () => {
    const res = await request(app).get("/sum/2/3");

    expect(res.body.result).toBe(5);
});


















