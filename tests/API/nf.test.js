/**
 *
 * @param {import('express').Express} app
 * @param {import('supertest')} request
 * @param {number} JEST_TIMEOUT
 */
 function main(app, request, JEST_TIMEOUT) {
  describe("/*", () => {
    // test random /api/* route that should return error
    test("should return 'Not found' (random url get) [negative-test]", async () => {
      const randomText = Math.random().toString(36).substring(7);
      const response = await request(app)
        .get("/api/"+randomText);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        error: true,
        message: "Not found",
        data: []
      });
    });
  });
}

module.exports = main;
