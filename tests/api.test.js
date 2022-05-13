const request = require("supertest");
const app = require("../app");
const JEST_TIMEOUT = 30000;
const ROOT_API = process.env.ROOT_PATH;

// load test file
const login = require(process.env.ROOT_PATH + "./login.test");
const logout = require(process.env.ROOT_PATH + "./logout.test");
const nf = require(process.env.ROOT_PATH + "./nf.test");

describe("API Scope Testing", () => {
  login(app, request, JEST_TIMEOUT);
  logout(app, request, JEST_TIMEOUT);
  nf(app, request, JEST_TIMEOUT);
});
