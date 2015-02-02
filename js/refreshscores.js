var RefreshScores = function() {

  RefreshScores.prototype.refreshCumulativeScores = function(board) {
    if (board.length > 1) {
      this._checkForSparesAndStrikes(board);
    }
    this._iterateOverFramesForCumulativeScores(board);
  }

  // RefreshScores.prototype.getScore = function(frameIndex, property) {
  //   if (this.board[frameIndex]) {
  //     frame = this.board[frameIndex];
  //     if (frame[property]) {
  //       return frame[property];  
  //     }
  //     else {
  //       return ""
  //     }
  //   }
  //   else {
  //     return "";
  //   }
  // }

  RefreshScores.prototype._iterateOverFramesForCumulativeScores = function(board) {
    board[0].cumulativeTotal = board[0].frameTotal;
    if (board.length > 1) {
      for (var frameIndex = 1; frames < board.length; frames += 1) {
      board[frameIndex].cumulativeTotal = board[frameIndex - 1].cumulativeTotal + board[frameIndex].frameTotal;
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
      this._addAdditionalScoreForConsecutiveStrikes(twoFramesAgo, previousFrame, thisFrame);
    }    
  }

  Score.prototype._stikePreviousFrameAndFinalFrame = function(previousFrame, thisFrame) {
    if (this.board.length === 10 && previousFrame.roll1 === 10 && thisFrame.roll1 === 10) {
      if (previousFrame.frameTotal !== previousFrame.roll1 + thisFrame.roll1 + thisFrame.roll2) {
        previousFrame.frameTotal += thisFrame.roll2;
      }
    }    
  }

  Score.prototype._checkWhetherStrikeScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.roll1 === 10) {
      return true;
    }
  }  

  Score.prototype._addAdditionalScoreForStrike = function(previousFrame, thisFrame) {
    if (previousFrame.frameTotal === (previousFrame.roll1 + thisFrame.roll1)) {
      previousFrame.frameTotal += thisFrame.roll2;      
    }
    else {
      previousFrame.frameTotal += thisFrame.roll1;
    }
  }

  Score.prototype._addAdditionalScoreForConsecutiveStrikes = function(twoFramesAgo, previousFrame, thisFrame) {
    if (twoFramesAgo.frameTotal !== (twoFramesAgo.roll1 + previousFrame.roll1 + thisFrame.roll1)) {
      twoFramesAgo.frameTotal += thisFrame.roll1;   
    }
  }

};