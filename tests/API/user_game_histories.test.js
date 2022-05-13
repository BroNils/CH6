const { PrismaClient } = require(process.env.ROOT_PATH + '/models/pgclient');

/** @type {import('../../models/pgclient').PrismaClient} */
const prisma = new PrismaClient()

/**
 *
 * @param {import('express').Express} app
 * @param {import('supertest')} request
 * @param {number} JEST_TIMEOUT
 */
 function main(app, request, JEST_TIMEOUT) {
  describe("/user_game_histories", () => {
    describe("GET-all", () => {
      test("should return 'No user history found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_histories")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "No user history found",
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

        await prisma.user_game_history.create({
          data: {
            user_game: {
              connect: {
                id: (await prisma.user_game.findFirst()).id
              }
            },
            game: "Snake",
            score: 100,
          }
        });

        const response = await request(app)
          .get("/api/user_game_histories")
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
              user_id: expect.any(Number),
              game: expect.any(String),
              score: expect.any(Number),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_game_histories")
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
      test("should return 'User game history created' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_game_histories")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            game: "Snake",
            score: 100,
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User game history created",
          data: expect.arrayContaining([])
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .post("/api/user_game_histories")
          .set("token", "x")
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            game: "Snake",
            score: 100,
          });

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'User id, game and score are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_game_histories")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            score: 100,
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User id, game and score are required",
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
          .get("/api/user_game_histories/1")
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
              user_id: expect.any(Number),
              game: expect.any(String),
              score: expect.any(Number),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'User history not found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_histories/999")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User history not found",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Invalid user history id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_histories/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user history id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_game_histories/1")
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
      test("should return 'User history updated' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_histories/1")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            game: "Snake",
            score: 100,
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User history updated",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              user_id: expect.any(Number),
              game: expect.any(String),
              score: expect.any(Number),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user history id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_histories/x")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            game: "Snake",
            score: 100,
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user history id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'User id, game and score are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_histories/1")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            score: 100,
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User id, game and score are required",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .put("/api/user_game_histories/1")
          .set("token", "x")
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            game: "Snake",
            score: 100,
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
      test("should return 'User history deleted' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_game_histories/1")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User history deleted",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              user_id: expect.any(Number),
              game: expect.any(String),
              score: expect.any(Number),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user history id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_game_histories/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user history id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .delete("/api/user_game_histories/1")
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
