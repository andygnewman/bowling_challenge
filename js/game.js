var Game = function() {

roll = new Roll();
frame = new Frame();
score = new Score();

  Game.prototype.runFrames = function(frame, score, roll) {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(frame, score, roll);
    }
  };

  Game.prototype.populateScore = function(frame, score, roll) {
    this._putFrameScoreInScoreBoard(frame, score, roll);
    score.refreshCumulativeScores();
  };

  Game.prototype._putFrameScoreInScoreBoard = function(frame, score, roll) {
    score.board.push(frame.getFrameScore(roll));  
  }

};