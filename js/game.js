var Game = function() {

  Game.prototype.runFrames = function(score, frame) {
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      game.populateScore(score, frame);
    }
  };


  Game.prototype.populateScore = function(score, frame) {
    score.board.push(frame.captureRollsScore());
  };

};