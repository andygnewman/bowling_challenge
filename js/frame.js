var Frame = function() {

  Frame.prototype.putFrameScoreInScoreBoard = function(score, roll) {
    score.board.push(this._getClonedFrameScore(this._captureSingleFrameRollsScore(roll)));  
  }

  Frame.prototype._getClonedFrameScore = function(frameScore) {
    var clone = {};
    for (var key in frameScore) {
      if (frameScore.hasOwnProperty(key)) {
        clone[key] = frameScore[key];
      }
    }
    return clone;
  }

  Frame.prototype._captureSingleFrameRollsScore = function(roll) {
    frameScore = {};
    frameScore.roll2 = 0;
    rollNumber = 1;
    do {
    pinsDowned = roll.pinsDownOnRoll(rollNumber);
    if (rollNumber === 1) {
      frameScore.roll1 = pinsDowned;
      frameScore.frameTotal = pinsDowned;
    }
    else {
      frameScore.roll2 = pinsDowned;
      frameScore.frameTotal += pinsDowned;
    }
    rollNumber += 1    
    } while (frameScore.frameTotal < 10 && rollNumber < 3);
    return frameScore ;
  };

  Frame.prototype._addRoll1Score = function(pinsDowned, frameScore) {
    frameScore.roll1 = pinsDowned;
    frameScore.frameTotal += pinsDowned;
  };

  Frame.prototype._addRoll2Score = function(pinsDowned, frameScore) {
    frameScore.roll2 = pinsDowned;
    frameScore.frameTotal += pinsDowned;
  };

};