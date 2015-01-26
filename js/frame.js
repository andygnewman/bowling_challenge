var Frame = function() {

  this.frameScore = {};

  Frame.prototype.getFrameScore = function(roll) {
    return this._cloneFrameScoreObject(this._captureSingleFrameRollsScore(roll));  
  }

  Frame.prototype._cloneFrameScoreObject = function(frameScore) {
    console.log(frameScore);
    var clone = {};
    for (var key in frameScore) {
      if (frameScore.hasOwnProperty(key)) {
        clone[key] = frameScore[key];
      }
    }
    return clone;
  }

  Frame.prototype._captureSingleFrameRollsScore = function(roll) {
    this._resetFrameScore();
    var self = this;
    rollNumber = 1;
    do {
    pinsDowned = roll.pinsDownOnRoll(rollNumber);
    if (rollNumber === 1) {
      self.frameScore.roll1 = pinsDowned;
      self.frameScore.frameTotal += pinsDowned;
    }
    else {
      self.frameScore.roll2 = pinsDowned;
      self.frameScore.frameTotal += pinsDowned;
    }
    rollNumber += 1    
    } while (self.frameScore.frameTotal < 10 && rollNumber < 3);
    return this.frameScore;
  };

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.frameTotal = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  }

  Frame.prototype._addRoll1Score = function(pinsDowned) {
    this.frameScore.roll1 = pinsDowned;
    this.frameScore.frameTotal += pinsDowned;
  };

  Frame.prototype._addRoll2Score = function(pinsDowned) {
    this.frameScore.roll2 = pinsDowned;
    this.frameScore.frameTotal += pinsDowned;
  };

};