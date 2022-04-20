const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Binar Challenge 05",
    description:
      "Binar Challenge 05 - API Documentation",
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
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/api.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./bin/www");
});

/**
 * User: {
      name: "Jhon Doe",
      age: 29,
      parents: {
        $ref: "#/definitions/Parents",
      },
      diplomas: [
        {
          school: "XYZ University",
          year: 2020,
          completed: true,
          internship: {
            hours: 290,
            location: "XYZ Company",
          },
        },
      ],
    },
    AddUser: {
      $name: "Jhon Doe",
      $age: 29,
      about: "",
    },
 */
