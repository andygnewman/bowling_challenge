var Frame = function() {

  this.frameScore = {};

  Frame.prototype.captureRollsScore = function(roll) {
    this._resetFrameScore();
    rollNumber = 1;
    do {
      pinsDowned = roll.pinsDownOnRoll(rollNumber);
      if (rollNumber === 1) {
        this._addRoll1Score(pinsDowned);
      }
      else {
        this._addRoll2Score(pinsDowned);
      }
      rollNumber += 1
    } while (this.frameScore.total < 10 && rollNumber < 3);
  };

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.total = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  };

  Frame.prototype._addRoll1Score = function(pinsDowned) {
    this.frameScore.roll1 = pinsDowned;
    this.frameScore.total += pinsDowned;
  };

  Frame.prototype._addRoll2Score = function(pinsDowned) {
    this.frameScore.roll2 = pinsDowned;
    this.frameScore.total += pinsDowned;
  };

};