// load environment variables from .env file
if (!process.env.LOADED_ENV) {
  process.env.ROOT_PATH = __dirname;
  require('dotenv').config({ path: process.env.ROOT_PATH + '/.env' });
}

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.1",
    title: "Binar Challenge 06",
    description:
      "Binar Challenge 06 - API Documentation",
  },
  host: "localhost:3000",
  basePath: "/api",
  schemes: ["http", "https"],
  consumes: [
    "application/json",
    "application/x-www-form-urlencoded"
  ],
  produces: ["application/json"],
  definitions: {
    BasicResponse: {
      error: false,
      message: "string",
      data: [{}],
    },
    Login: {
      username: "admin",
      password: "admin",
    },
    UserGame: {
      username: "string",
      email: "string",
      password: "string",
    },
    UserGameBiodata: {
      user_id: 1,
      first_name: "string",
      last_name: "string",
      age: 1,
      about: "string",
    },
    UserGameHistory: {
      user_id: 1,
      game: "string",
      score: 1,
    }
  },
  securityDefinitions: {
    token: {
      type: "apiKey",
      name: "token",
      in: "header",
      description: "A valid token is required to access some resource",
    }
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/api.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./bin/www");
});
