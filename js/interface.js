console.log("hello world");

var game = new Game();

// var updateScoreBoard = function() {

// };

  $(document).ready(function() {
  game.populateScoreBoard();
  console.log(game.scoreBoard);
  $('#score-board').html($(game.scoreBoard));

  $('.start-game').on('click', function(event) {
  event.preventDefault();
  game.runFrames();
  });

});