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
  describe("/user_game_biodatas", () => {
    describe("GET-all", () => {
      test("should return 'No user biodata found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_biodatas")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "No user biodata found",
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

        await prisma.user_game_biodata.create({
          data: {
            user_game: {
              connect: {
                id: (await prisma.user_game.findFirst()).id
              }
            },
            first_name: "John",
            last_name: "Doe",
            age: 30,
            about: "I am John Doe",
          }
        });

        const response = await request(app)
          .get("/api/user_game_biodatas")
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
              first_name: expect.any(String),
              last_name: expect.any(String),
              age: expect.any(Number),
              about: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_game_biodatas")
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
      test("should return 'User game biodata created' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_game_biodatas")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "John",
            last_name: "Doe",
            age: 30,
            about: "I am John Doe",
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User game biodata created",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              user_id: expect.any(Number),
              first_name: expect.any(String),
              last_name: expect.any(String),
              age: expect.any(Number),
              about: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .post("/api/user_game_biodatas")
          .set("token", "x")
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "John",
            last_name: "Doe",
            age: 30,
            about: "I am John Doe",
          });

        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual({
          error: true,
          message: "Unauthorized",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'User id, first name, last name, age and about are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .post("/api/user_game_biodatas")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "",
            last_name: "",
            age: "",
            about: "",
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User id, first name, last name, age and about are required",
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
          .get("/api/user_game_biodatas/1")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "Success",
          data: expect.arrayContaining([])
        });
      }, JEST_TIMEOUT);

      test("should return 'User biodata not found' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_biodatas/999")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User biodata not found",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Invalid user biodata id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .get("/api/user_game_biodatas/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user biodata id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .get("/api/user_game_biodatas/1")
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
      test("should return 'User biodata updated' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_biodatas/1")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "A",
            last_name: "B",
            age: 31,
            about: "C",
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User biodata updated",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              user_id: expect.any(Number),
              first_name: expect.any(String),
              last_name: expect.any(String),
              age: expect.any(Number),
              about: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user biodata id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_biodatas/x")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "A",
            last_name: "B",
            age: 31,
            about: "C",
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user biodata id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'User id, first name, last name, age and about are required' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .put("/api/user_game_biodatas/1")
          .set("token", token)
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "",
            last_name: "",
            age: "",
            about: "",
          });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "User id, first name, last name, age and about are required",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .put("/api/user_game_biodatas/1")
          .set("token", "x")
          .send({
            user_id: (await prisma.user_game.findFirst()).id,
            first_name: "A",
            last_name: "B",
            age: 31,
            about: "C",
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
      test("should return 'User biodata deleted' with array of data [positive-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_game_biodatas/1")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: false,
          message: "User biodata deleted",
          data: expect.arrayContaining([])
        });

        if (response.body.data.length > 0) {
          expect(response.body.data[0]).toEqual(
            expect.objectContaining({
              user_id: expect.any(Number),
              first_name: expect.any(String),
              last_name: expect.any(String),
              age: expect.any(Number),
              about: expect.any(String),
            })
          );
        }
      }, JEST_TIMEOUT);

      test("should return 'Invalid user biodata id' with empty data [negative-test]", async () => {
        const responseLogin = await request(app)
          .post("/api/login")
          .send({
            username: "admin",
            password: "admin",
          });

        const token = responseLogin.body.data[0].token;

        const response = await request(app)
          .delete("/api/user_game_biodatas/x")
          .set("token", token);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          error: true,
          message: "Invalid user biodata id",
          data: []
        });
      }, JEST_TIMEOUT);

      test("should return 'Unauthorized' with empty data [negative-test]", async () => {
        const response = await request(app)
          .delete("/api/user_game_biodatas/1")
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
