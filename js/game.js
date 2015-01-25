var Game = function() {

  Game.prototype.populateScore = function(score, frame) {
    score.board.push(frame.captureRollsScore());
  };

};