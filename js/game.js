var Game = function() {

  Game.prototype.runFrames = function(score, frame, roll) {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(score, frame);
    }
    if (score.board[9].frameTotal === 10) {
      score.board[9].roll3 = roll.pinsDownOnRoll(3);
      score.board[9].frameTotal += score.board[9].roll3;
      score.board[9].cumulativeTotal += score.board[9].roll3;
      if (score.board[8].roll1 === 10 && score.board[9].roll1 === 10) {
        score.board[8].frameTotal += score.board[9].roll3;
        score.board[8].cumulativeTotal += score.board[9].roll3;
        score.board[9].cumulativeTotal += score.board[9].roll3;
      }
    }
    if (score.board[9].roll1 === 10) {
      score.board[9].roll4 = roll.pinsDownOnRoll(4);
      score.board[9].frameTotal += score.board[9].roll4;
      score.board[9].cumulativeTotal += score.board[9].roll4;
    }
      for (var i = 0; i < score.board.length; i++) {
        console.log(score.board[i].cumulativeTotal);
      }
  };

  Game.prototype.populateScore = function(score, frame, roll) {
    score.board.push(frame.getClonedFrameScore(frame.captureSingleFrameRollsScore(roll)));
    score.refreshCumulativeScores();
  };

};