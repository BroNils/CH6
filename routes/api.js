var express = require('express');
var router = express.Router();
var path = require('path');
var rootController = path.join(process.env.ROOT_PATH, '/controllers/API');

/**
 * Load API controllers
 */
var nfHandler = require(path.join(rootController, '/nf.js'));
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
    schema: { $ref: "#/definitions/Login" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, loginController);

router.get('/user_games', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game data' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.all);
router.get('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.view);
router.post('/user_games', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.store);
router.put('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.update);
router.patch('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGame" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.update);
router.delete('/user_games/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userController.destroy);

router.get('/user_game_biodatas', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game biodata data' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.all);
router.get('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game biodata data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.view);
router.post('/user_game_biodatas', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game biodata data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.store);
router.put('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game biodata data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.update);
router.patch('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game biodata data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameBiodata" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.update);
router.delete('/user_game_biodatas/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game biodata data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameBiodataController.destroy);

router.get('/user_game_histories', (req, res, next) => {
  /* 	#swagger.description = 'Get all user game history data' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.all);
router.get('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Get user game history data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.view);
router.post('/user_game_histories', (req, res, next) => {
  /* 	#swagger.description = 'Create new user game history data' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to create.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.store);
router.put('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game history data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.update);
router.patch('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Update user game history data with id' */
  /*	#swagger.parameters = {
    in: 'body',
    description: 'Data to update.',
    required: true,
    schema: { $ref: "#/definitions/UserGameHistory" }
  } */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.update);
router.delete('/user_game_histories/:id', (req, res, next) => {
  /* 	#swagger.description = 'Delete user game history data with id' */
  /* #swagger.responses[200] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Successfully done." } */
  /* #swagger.responses[500] = {
    schema: { "$ref": "#/definitions/BasicResponse" },
    description: "Internal error." } */
  next();
}, userGameHistoriesController.destroy);

// catch 404 and respond json
router.all('/*', nfHandler);

module.exports = router;
