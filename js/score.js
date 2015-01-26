var Score = function() {

  var board;
  this.board = [];

  Score.prototype.refreshPreviousFrameScoreIfSpareScored = function() {
    if (this.board.length > 1 && this.spareScoredInLastButOneFrame()) {
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
    self.board[0].cumulativeTotal = self.board[0].frameTotal;
    if (self.board.length > 1) {
      for (var framesBowled = 2; framesBowled <= self.board.length; framesBowled ++) {
        self.board[framesBowled - 1].cumulativeTotal = self.board[framesBowled - 2].cumulativeTotal + self.board[framesBowled - 1].frameTotal; 
        }
    }
    console.log(self.board);
  }


};