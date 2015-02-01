console.log("hello world");

var game = new Game();

  $(document).ready(function() {
  game.populateScoreBoard();
  game.populateMaxScoreDropDown();
  $('#score-board').html($(game.scoreBoard));
  $('#score-dropdown').html($(game.maxScoreDropDown));
  $('#frame-number').text(game.frame.rollTracker.frameNumber);
  $('#ball-number').text(game.frame.rollTracker.rollNumber);

  
  $('#score-entry').on('submit', function(event) {
  event.preventDefault();
  var bowl = $("#score-dropdown option:selected").val();
  game.frame.updateRollScore(bowl);
  game.frame.updateFrameWithScoreAndAdvanceRoll();
  game.populateScore();
  game.populateScoreBoard();
  game.populateMaxScoreDropDown();
  $('#score-board').html($(game.scoreBoard)); 
  $('#score-dropdown').html($(game.maxScoreDropDown));
  $('#frame-number').text(game.frame.rollTracker.frameNumber);
  $('#ball-number').text(game.frame.rollTracker.rollNumber); 
  });



});