var express = require('express');
var router = express.Router();
var path = require('path');
var rootController = path.join(process.env.ROOT_PATH, '/controllers/web');

/**
 * Load web controllers
 */
var logoutHandler = require(path.join(rootController, '/logout'));
var dashboardHandler = require(path.join(rootController, '/dashboard.js'));
var indexHandler = require(path.join(rootController, '/home.js'));
var userGameHandler = require(path.join(rootController, '/user_game'));
var userGameHistoryHandler = require(path.join(rootController, '/user_game_history'));
var userGameBiodataHandler = require(path.join(rootController, '/user_game_biodata'));
var nfHandler = require(path.join(rootController, '/nf.js'));

router.get('/add_user_game', userGameHandler.add);
router.get('/delete_user_game', userGameHandler.delete);
router.get('/update_user_game', userGameHandler.update);

router.get('/add_user_game_history', userGameHistoryHandler.add);
router.get('/delete_user_game_history', userGameHistoryHandler.delete);
router.get('/update_user_game_history', userGameHistoryHandler.update);

router.get('/add_user_game_biodata', userGameBiodataHandler.add);
router.get('/delete_user_game_biodata', userGameBiodataHandler.delete);
router.get('/update_user_game_biodata', userGameBiodataHandler.update);

router.get('/dashboard', dashboardHandler);

router.get('/logout', logoutHandler);

/* GET home page. */
router.get('/', indexHandler);

// catch 404 and forward to error handler
router.all('/*', nfHandler);

module.exports = router;
