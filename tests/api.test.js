const request = require("supertest");
const app = require("../app");

const JEST_TIMEOUT = 30000;
const ROOT_API = process.env.ROOT_PATH + "/./tests/API/";

// load test file
const login = require(ROOT_API + "./login.test");
const logout = require(ROOT_API + "./logout.test");
const nf = require(ROOT_API + "./nf.test");
const user_games = require(ROOT_API + "./user_games.test");
const user_game_biodatas = require(ROOT_API + "./user_game_biodatas.test");
const user_game_histories = require(ROOT_API + "./user_game_histories.test");

describe("API Scope Testing", () => {
  login(app, request, JEST_TIMEOUT);
  logout(app, request, JEST_TIMEOUT);
  nf(app, request, JEST_TIMEOUT);
  user_games(app, request, JEST_TIMEOUT);
  user_game_biodatas(app, request, JEST_TIMEOUT);
  user_game_histories(app, request, JEST_TIMEOUT);
});
