/**
 *
 * @param {import('express').Express} app
 * @param {import('supertest')} request
 * @param {number} JEST_TIMEOUT
 */
 function main(app, request, JEST_TIMEOUT) {
  describe("/logout", () => {
    test("should return 'Logout success' with empty data [positive-test]", async () => {
      const responseLogin = await request(app)
        .post("/api/login")
        .send({
          username: "admin",
          password: "admin",
        });

      const token = responseLogin.body.data[0].token;

      // post request to /api/logout with header 'token'
      const response = await request(app)
        .post("/api/logout")
        .set("token", token);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        error: false,
        message: "Logout success",
        data: []
      });
    }, JEST_TIMEOUT);

    test("should return 'Unauthorized' with empty data [negative-test]", async () => {
      const response = await request(app)
        .post("/api/logout")
        .set("token", "x");

      expect(response.statusCode).toBe(401);
      expect(response.body).toEqual({
        error: true,
        message: "Unauthorized",
        data: []
      });
    }, JEST_TIMEOUT);
  });
}

module.exports = main;
