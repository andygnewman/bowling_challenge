var Game = function() {

  Game.prototype.runFrames = function(score, frame) {
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      game.populateScore(score, frame);
    }
  };

  Game.prototype.populateScore = function(score, frame) {
    score.board.push(frame.captureRollsScore());
    if (score.board.length > 1) {
      lastCumulativeTotal = score.board[score.board.length - 2].cumulativeTotal;
      thisTotalScore = score.board[score.board.length - 1].frameTotal;
      score.board[score.board.length - 1].cumulativeTotal = lastCumulativeTotal + thisTotalScore;
    }
    else {
      score.board[score.board.length - 1].cumulativeTotal = score.board[score.board.length - 1].frameTotal;     
    }
  };

};