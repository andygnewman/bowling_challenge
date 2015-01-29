var Score = function() {

  // var board;
  this.board = [];

  Score.prototype.refreshCumulativeScores = function() {
    if (this.board.length > 1) {
      this._checkForSparesAndStrikes();
    }
    this._iterateOverFramesForCumulativeScores();
  }

  Score.prototype.getScore = function(frameIndex, property) {
    if (this.board[frameIndex]) {
      frame = this.board[frameIndex];
      return frame[property];
    }
    else {
      return "-";
    }
  }

  Score.prototype._iterateOverFramesForCumulativeScores = function() {
    var self = this;
    self.board[0].cumulativeTotal = self.board[0].frameTotal;
    if (self.board.length > 1) {
      for (var frames = 2; frames < self.board.length + 1; frames += 1) {
      self.board[frames - 1].cumulativeTotal = self.board[frames - 2].cumulativeTotal + self.board[frames - 1].frameTotal;
      }
    }    
  }

  Score.prototype._checkForSparesAndStrikes = function() {
    this._checkForSpare();
    this._checkForStrike();
  }

  Score.prototype._checkForSpare = function() {
    previousFrame = this.board[this.board.length - 2];
    thisFrame =  this.board[this.board.length - 1];
    if (this._checkWhetherSpareScoredOnPreviousFrame(previousFrame)) {
      previousFrame.frameTotal += thisFrame.roll1;
    }
  }

  Score.prototype._checkWhetherSpareScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.frameTotal === 10 && previousFrame.roll2 > 0) {
      return true;
    }
  }

  Score.prototype._checkForStrike = function() {
    previousFrame = this.board[this.board.length - 2];
    thisFrame =  this.board[this.board.length - 1];
    twoFramesAgo = this.board[this.board.length - 3];
    this._strikeOnPreviousFrame(previousFrame, thisFrame);
    this._strikeTwoFramesAgo(previousFrame, thisFrame, twoFramesAgo);
    this._stikePreviousFrameAndFinalFrame(previousFrame, thisFrame);
  }

  Score.prototype._strikeOnPreviousFrame = function(previousFrame, thisFrame) {
    if (this._checkWhetherStrikeScoredOnPreviousFrame(previousFrame)) {
      this._addAdditionalScoreForStrike(previousFrame, thisFrame);
    }  
  }

  Score.prototype._strikeTwoFramesAgo = function(previousFrame, thisFrame, twoFramesAgo) {
    if (this.board.length > 2 && twoFramesAgo.roll1 === 10 && previousFrame.roll1 === 10) {
      this._addAdditionalScoreForConsecutiveStrikes(twoFramesAgo, thisFrame);
    }    
  }

  Score.prototype._stikePreviousFrameAndFinalFrame = function(previousFrame, thisFrame) {
    if (this.board.length === 10 && previousFrame.roll1 === 10 && thisFrame.roll1 === 10) {
      previousFrame.frameTotal += thisFrame.roll3;
    }    
  }

  Score.prototype._checkWhetherStrikeScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.roll1 === 10) {
      return true;
    }
  }  

  Score.prototype._addAdditionalScoreForStrike = function(previousFrame, thisFrame) {
    previousFrame.frameTotal += thisFrame.roll1;
    previousFrame.frameTotal += thisFrame.roll2;
  }

  Score.prototype._addAdditionalScoreForConsecutiveStrikes = function(twoFramesAgo, thisFrame) {
    twoFramesAgo.frameTotal += thisFrame.roll1;
  }

};