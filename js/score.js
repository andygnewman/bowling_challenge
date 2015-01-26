var Score = function() {

  var board;
  this.board = [];

  Score.prototype.refreshCumulativeScores = function() {
    var self = this;
    self.board[0].cumulativeTotal = self.board[0].frameTotal;
    if (self.board.length > 1) {
      for (var frames = 2; frames < self.board.length + 1; frames += 1) {
      self.board[frames - 1].cumulativeTotal = self.board[frames - 2].cumulativeTotal + self.board[frames - 1].frameTotal;
      }
    }
  }


};