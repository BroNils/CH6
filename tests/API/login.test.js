/**
 *
 * @param {import('express').Express} app
 * @param {import('supertest')} request
 * @param {number} JEST_TIMEOUT
 */
function main(app, request, JEST_TIMEOUT) {
  describe("/login", () => {
    test("should return 'Login success' with array of data [positive-test]", async () => {
      const response = await request(app)
        .post("/api/login")
        .send({
          username: "admin",
          password: "admin",
        });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        error: false,
        message: "Login success",
        data: [
          expect.objectContaining({
            token: expect.any(String),
          })
        ]
      });
    }, JEST_TIMEOUT);

    test("should return 'Username or password is incorrect' with empty data [negative-test]", async () => {
      const response = await request(app)
        .post("/api/login")
        .send({
          username: "x",
          password: "x",
        });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        error: true,
        message: "Username or password is incorrect",
        data: []
      });
    }, JEST_TIMEOUT);

    test("should return 'Username and password are required' with empty data [negative-test]", async () => {
      const response = await request(app)
        .post("/api/login")
        .send({
          username: "",
          password: "",
        });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        error: true,
        message: "Username and password are required",
        data: []
      });
    });
  });
}

module.exports = main;
