console.log("hello world");

var game = new Game();

// var updateScoreBoard = function() {

// };

  $(document).ready(function() {
  game.populateScoreBoard();
  $('#score-board').html($(game.scoreBoard));

  $('.start-game').on('click', function(event) {
  event.preventDefault();
  game.runFrames();
  game.populateScoreBoard();
  $('#score-board').html($(game.scoreBoard));  
  });



});