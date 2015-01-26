var Score = function() {

  var board;
  this.board = [];

  Score.prototype.refreshPreviousFrameScoreIfSpareScored = function() {
    if (this.board.length > 1 && this.strikeScoredInLastButOneFrame()) {
      this.board[this.board.length -2].frameTotal += this.board[this.board.length -1].roll1;
    }
  }

  Score.prototype.spareScoredInLastButOneFrame = function() {
    if (this.board[this.board.length -2].frameTotal === 10 && this.board[this.board.length -2].roll2 > 0) {
      return true;
    }
  }

  Score.prototype.refreshCumulativeScores = function() {
    var self = this;
    console.log("ScoreBoard length " + self.board.length);
    for (var framesBowled = 1; framesBowled <= self.board.length; framesBowled ++) {
      console.log("For loop frames Bowled " + framesBowled);
      if (framesBowled === 1) {
        self.board[framesBowled - 1].cumulativeTotal = self.board[framesBowled - 1].frameTotal;
      }
      else {
        self.board[framesBowled - 1].cumulativeTotal = self.board[framesBowled - 2].cumulativeTotal + self.board[framesBowled - 1].frameTotal; 
      }
      console.log(self.board[framesBowled - 1]);
    }
  }


};