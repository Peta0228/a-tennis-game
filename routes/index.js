var express = require('express');
var router = express.Router();
var game = require('../games/game');
var player = require('../games/player');

var player1 = new player('player 1');
var player2 = new player('player 2');
var match = new game([player1, player2]);
match.start();


/* GET home page. */
router.get('/', function (req, res, next) {
  var msg = { page: 'Home', menuId: 'home', player1Score: player1.getPointsWon(), player2Score: player2.getPointsWon(),scoreboard: match.GetScoreboard()};
  res.render('index', msg);
});

router.get('/player1Scored', function (req, res, next) {
  match.getCurrentGame().wonPoint(player1);
  var msg = { page: 'Home', menuId: 'home', player1Score: player1.getPointsWon(), player2Score: player2.getPointsWon(), scoreboard: match.GetScoreboard() };
  res.render('index', msg);
});
router.get('/player2Scored', function (req, res, next) {
  match.getCurrentGame().wonPoint(player2);
  var msg = { page: 'Home', menuId: 'home', player1Score: player1.getPointsWon(), player2Score: player2.getPointsWon(), scoreboard: match.GetScoreboard() };
  res.render('index', msg);
});
router.put('/resetGame', function (req, res, next) {
  match.getCurrentGame().reset();
  var msg = { page: 'Home', menuId: 'home', player1Score: player1.getPointsWon(), player2Score: player2.getPointsWon(), scoreboard: match.GetScoreboard() };
  res.render('index', msg);
});

module.exports = router;