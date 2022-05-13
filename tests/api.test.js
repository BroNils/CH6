const request = require("supertest");
const app = require("../app");
const JEST_TIMEOUT = 30000;

// load test file
const login = require("./api/login.test");
const logout = require("./api/logout.test");
const nf = require("./api/nf.test");

describe("API Scope Testing", () => {
  login(app, request, JEST_TIMEOUT);
  logout(app, request, JEST_TIMEOUT);
  nf(app, request, JEST_TIMEOUT);
});
