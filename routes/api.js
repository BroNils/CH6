var express = require('express');
var router = express.Router();
var path = require('path');
var rootController = path.join(process.env.ROOT_PATH, '/controllers/API');

/**
 * middlewares for /api path
 */
var authorize = require(path.join(process.env.ROOT_PATH, '/middlewares/authorize'));

/**
 * Load API controllers
 */
var nfHandler = require(path.join(rootController, '/nf.js'));
var logoutController = require(path.join(rootController, 'logout'));
var loginController = require(path.join(rootController, 'login'));
var userController = require(path.join(rootController, 'user_games'));
var userGameBiodataController = require(path.join(rootController, 'user_game_biodatas'));
var userGameHistoriesController = require(path.join(rootController, 'user_game_histories'));

router.post('/login', (req, res, next) => {
  /* 	#swagger.description = 'Login controller' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to login.',
    required: true,
    schema: { $ref: "#/definitions/Login" },
    name: 'body',
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, loginController);
router.post('/logout', (req, res, next) => {
  /* 	#swagger.description = 'Logout controller' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, logoutController);

router.get('/user_games', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game data' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.all);
router.get('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.view);
router.post('/user_games', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.store);
router.put('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.update);
router.patch('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.update);
router.delete('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userController.destroy);

router.get('/user_game_biodatas', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game biodata data' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.all);
router.get('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game biodata data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.view);
router.post('/user_game_biodatas', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game biodata data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.store);
router.put('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game biodata data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.update);
router.patch('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game biodata data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.update);
router.delete('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game biodata data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameBiodataController.destroy);

router.get('/user_game_histories', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game history data' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.all);
router.get('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game history data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.view);
router.post('/user_game_histories', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game history data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.store);
router.put('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game history data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.update);
router.patch('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game history data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" },
    name: 'body',
  } */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.update);
router.delete('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game history data with id' */
  /* #swagger.security = [{
      "token": []
    }] */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  /* #swagger.responses[401] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, authorize, userGameHistoriesController.destroy);

// catch 404 and respond json
router.all('/*', nfHandler);

module.exports = router;
