var Game = function() {

  Game.prototype.runFrames = function(frame, score, roll) {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(frame, score, roll);
    }
    this._extraBowlsRoutine(score, roll);
  };

  Game.prototype.populateScore = function(frame, score, roll) {
    this._putFrameScoreInScoreBoard(frame, score, roll);
    score.refreshCumulativeScores();
  };

  Game.prototype._putFrameScoreInScoreBoard = function(frame, score, roll) {
    score.board.push(frame.getFrameScore(roll));  
  }

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