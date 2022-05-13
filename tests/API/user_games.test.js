const { PrismaClient } = require(process.env.ROOT_PATH + '/models/pgclient');

/** @type {import('../../models/pgclient').PrismaClient} */
const prisma = new PrismaClient()

/**
 *
 * @param {import('express').Express} app
 * @param {import('supertest')} request
 * @param {number} JEST_TIMEOUT
 */
async function main(app, request, JEST_TIMEOUT) {
  describe("/user_games", () => {
    describe("GET-all", () => {
      test("should return 'No user found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_games")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "No user found",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Success' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        await prisma.user_game.create({
          data: {
            "username": "string",
            "email": "string",
            "password": "string"
          }
        });

        const response = await request(app)
          .get("/api/user_games")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "Success",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_games")
          .set("token", "x");

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);
    });

    describe("POST", () => {
      test("should return 'User created' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_games")
          .set("token", token)
          .send({
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User created",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .post("/api/user_games")
          .set("token", "x")
          .send({
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
          });

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Username, password and email are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_games")
          .set("token", token)
          .send({
            username: "",
            email: "",
            password: ""
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Username, password and email are required",
          data: []
        });
      }, JEST_TIMEOUT);
    });

    describe("GET-by-id", () => {
      test("should return 'Success' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_games/1")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "Success",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'User not found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_games/999")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User not found",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Invalid user id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_games/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_games/1")
          .set("token", "x");

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);
    });

    describe("PUT/PATCH", () => {
      test("should return 'User updated' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_games/1")
          .set("token", token)
          .send({
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User updated",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_games/x")
          .set("token", token)
          .send({
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Username, password and email are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_games/1")
          .set("token", token)
          .send({
            username: "",
            email: "",
            password: ""
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Username, password and email are required",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .put("/api/user_games/1")
          .set("token", "x")
          .send({
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
          });

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);
    });

    describe("DELETE", () => {
      test("should return 'User deleted' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_games/1")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User deleted",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_games/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .delete("/api/user_games/1")
          .set("token", "x");

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);
    });
  });
}

module.exports = main;
