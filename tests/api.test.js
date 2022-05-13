const request = require("supertest");
const app = require("../app");

const JEST_TIMEOUT = 30000;
const ROOT_API = process.env.ROOT_PATH + "/./tests/API/";

// load test file
const login = require(ROOT_API + "./login.test");
const logout = require(ROOT_API + "./logout.test");
const nf = require(ROOT_API + "./nf.test");

describe("API Scope Testing", () => {
  login(app, request, JEST_TIMEOUT);
  logout(app, request, JEST_TIMEOUT);
  nf(app, request, JEST_TIMEOUT);
});
