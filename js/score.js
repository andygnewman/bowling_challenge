var Score = function() {

  var board;
  this.board = [];

  Score.prototype.refreshCumulativeScores = function() {
    this._checkForSpare();
    this._checkForStrike();
    var self = this;
    self.board[0].cumulativeTotal = self.board[0].frameTotal;
    if (self.board.length > 1) {
      for (var frames = 2; frames < self.board.length + 1; frames += 1) {
      self.board[frames - 1].cumulativeTotal = self.board[frames - 2].cumulativeTotal + self.board[frames - 1].frameTotal;
      }
    }
  }

  Score.prototype._checkForSpare = function() {
    if (this.board.length > 1) {
      previousFrame = this.board[this.board.length - 2];
      thisFrame =  this.board[this.board.length - 1];
      if (this._checkWhetherSpareScoredOnPreviousFrame(previousFrame)) {
        previousFrame.frameTotal += thisFrame.roll1;
      }
    }
  }

  Score.prototype._checkWhetherSpareScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.frameTotal === 10 && previousFrame.roll2 > 0) {
      return true;
    }
  }

  Score.prototype._checkForStrike = function() {
    if (this.board.length > 2) {
      twoFramesAgo = this.board[this.board.length - 3];
      previousFrame = this.board[this.board.length - 2];
      thisFrame =  this.board[this.board.length - 1];
      if (this._checkWhetherStrikeScoredTwoFramesAgo(twoFramesAgo)) {
        this._addAdditionalScoreForStrike(twoFramesAgo, previousFrame, thisFrame);
      }
    }
  }

  Score.prototype._checkWhetherStrikeScoredTwoFramesAgo = function(twoFramesAgo) {
    if (twoFramesAgo.roll1 === 10) {
      return true;
    }
  }  

  Score.prototype._addAdditionalScoreForStrike = function(twoFramesAgo, previousFrame, thisFrame) {
    twoFramesAgo.frameTotal += previousFrame.roll1;
    if (previousFrame.roll1 === 10) {
      twoFramesAgo.frameTotal += thisFrame.roll1;
    }
    else {
      twoFramesAgo.frameTotal += previousFrame.roll2;
    }
  }

};