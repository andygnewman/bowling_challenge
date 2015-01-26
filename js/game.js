var Game = function() {

  Game.prototype.runFrames = function(score, frame, roll) {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(score, frame);
    }
  };

  Game.prototype.populateScore = function(score, frame, roll) {
    score.board.push(frame.getClonedFrameScore(frame.captureSingleFrameRollsScore(roll)));
    score.refreshCumulativeScores();
  };

};