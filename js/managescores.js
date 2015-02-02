var ManageScores = function() {

  ManageScores.prototype.refreshScores = function(board) {
    if (board.length > 1) {
      this._checkForSparesAndStrikes(board);
    }
    this._iterateOverFramesForCumulativeScores(board);
  }

  ManageScores.prototype._iterateOverFramesForCumulativeScores = function(board) {
    board[0].cumulativeTotal = board[0].frameTotal;
    if (board.length > 1) {
      for (var frameIndex = 1; frameIndex < board.length; frameIndex += 1) {
        board[frameIndex].cumulativeTotal = board[frameIndex - 1].cumulativeTotal + board[frameIndex].frameTotal;
      }
    } 
  }

  ManageScores.prototype._checkForSparesAndStrikes = function(board) {
    this._checkForSpare(board);
    this._checkForStrike(board);
  }

  ManageScores.prototype._checkForSpare = function(board) {
    previousFrame = board[board.length - 2];
    thisFrame =  board[board.length - 1];
    if (this._checkWhetherSpareScoredOnPreviousFrame(previousFrame)) {
      previousFrame.frameTotal += thisFrame.roll1;
    }
  }

  ManageScores.prototype._checkWhetherSpareScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.frameTotal === 10 && previousFrame.roll2 > 0) {
      return true;
    }
  }

  ManageScores.prototype._checkForStrike = function(board) {
    previousFrame = board[board.length - 2];
    thisFrame = board[board.length - 1];
    twoFramesAgo = board[board.length - 3];
    this._strikeOnPreviousFrame(previousFrame, thisFrame);
    if (board.length > 2) {
      this._strikeTwoFramesAgo(previousFrame, thisFrame, twoFramesAgo);
    }
  }

  ManageScores.prototype._strikeOnPreviousFrame = function(previousFrame, thisFrame) {
    if (this._checkWhetherStrikeScoredOnPreviousFrame(previousFrame)) {
      this._addAdditionalScoreForStrike(previousFrame, thisFrame);
    }  
  }

  ManageScores.prototype._strikeTwoFramesAgo = function(previousFrame, thisFrame, twoFramesAgo) {
    if (twoFramesAgo.roll1 === 10 && previousFrame.roll1 === 10) {
      this._addAdditionalScoreForConsecutiveStrikes(twoFramesAgo, previousFrame, thisFrame);
    }    
  }

  ManageScores.prototype._checkWhetherStrikeScoredOnPreviousFrame = function(previousFrame) {
    if (previousFrame.roll1 === 10) {
      return true;
    }
  }  

  ManageScores.prototype._addAdditionalScoreForStrike = function(previousFrame, thisFrame) {
    if (previousFrame.frameTotal === (previousFrame.roll1 + thisFrame.roll1)) {
      previousFrame.frameTotal += thisFrame.roll2;      
    }
    if (previousFrame.frameTotal === previousFrame.roll1) {
      previousFrame.frameTotal += thisFrame.roll1;
    }
  }

  ManageScores.prototype._addAdditionalScoreForConsecutiveStrikes = function(twoFramesAgo, previousFrame, thisFrame) {
    if (twoFramesAgo.frameTotal !== (twoFramesAgo.roll1 + previousFrame.roll1 + thisFrame.roll1)) {
      twoFramesAgo.frameTotal += thisFrame.roll1;   
    }
  }

};