var Game = function() {

  Game.prototype.runFrames = function(score, frame, roll) {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(score, frame);
    }
    this._extraBowlsRoutine(score, roll);
    for (var i = 1; i < score.board.length; i++) {
      console.log(score.board[i].cumulativeTotal);
    }
  };

  Game.prototype.populateScore = function(score, frame, roll) {
    frame.putFrameScoreInScoreBoard(score, roll);
    score.refreshCumulativeScores();
  };

  Game.prototype._extraBowlsRoutine = function(score, roll) {
    if (score.board[9].frameTotal === 10) {
      this._firstExtraBowl(score, roll);
    }
    if (score.board[9].roll1 === 10) {
      this._secondExtraBowl(score, roll);
    }    
  }

  Game.prototype._firstExtraBowl = function(score, roll) {
    score.board[9].roll3 = roll.pinsDownOnRoll(3);
    score.board[9].frameTotal += score.board[9].roll3;
    score.board[9].cumulativeTotal += score.board[9].roll3;
    if (score.board[8].roll1 === 10 && score.board[9].roll1 === 10) {
      this._firstExtraBowlConsecutiveStrikes(score);
    }    
  }

  Game.prototype._secondExtraBowl = function(score, roll) {
    score.board[9].roll4 = roll.pinsDownOnRoll(4);
    score.board[9].frameTotal += score.board[9].roll4;
    score.board[9].cumulativeTotal += score.board[9].roll4;    
  }

  Game.prototype._firstExtraBowlConsecutiveStrikes = function(score) {
    score.board[8].frameTotal += score.board[9].roll3;
    score.board[8].cumulativeTotal += score.board[9].roll3;
    score.board[9].cumulativeTotal += score.board[9].roll3;    
  }
 
};