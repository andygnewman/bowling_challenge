var Frame = function() {

  this.roll = new Roll();
  this.frameScore = {};
  this.frameNumber = 1;

  Frame.prototype.getFrameScore = function() {
    return this._cloneFrameScoreObject(this._captureSingleFrameRollsScore(this.roll));  
  }

  Frame.prototype._cloneFrameScoreObject = function(frameScore) {
    var clone = {};
    for (var key in frameScore) {
      if (frameScore.hasOwnProperty(key)) {
        clone[key] = frameScore[key];
      }
    }
    return clone;
  }

  Frame.prototype._captureSingleFrameRollsScore = function() {
    this._resetFrameScore();
    rollNumber = 1;
    do {
      this._standardFrameRoutine(rollNumber);
      rollNumber += 1;
    } while (this.frameScore.frameTotal < 10 && rollNumber < 3);

    if (this.frameNumber === 10) {
      this._extraBowlsRoutine();
    }
    this.frameNumber += 1;
    return this.frameScore;
  };

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.frameTotal = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  }

  Frame.prototype._standardFrameRoutine = function(rollNumber) {
    pinsDowned = this.roll.pinsDownOnRoll(this.frameNumber, rollNumber);
    this._addRollScores(pinsDowned, rollNumber);
  }


  Frame.prototype._addRollScores = function(pinsDowned, rollNumber) {
    if (rollNumber === 1) {
      this._addRoll1Score(pinsDowned);
    }
    else {
      this._addRoll2Score(pinsDowned);      
    }    
  }

  Frame.prototype._addRoll1Score = function(pinsDowned) {
    this.frameScore.roll1 = pinsDowned;
    this.frameScore.frameTotal += pinsDowned;
  }

  Frame.prototype._addRoll2Score = function(pinsDowned) {
    this.frameScore.roll2 = pinsDowned;
    this.frameScore.frameTotal += pinsDowned;
  }

  Frame.prototype._extraBowlsRoutine = function() {
    if (this.frameScore.frameTotal === 10) {
      this._firstExtraBowl();
    }
    if (this.frameScore.roll1 === 10) {
      this._secondExtraBowl();
    }    
  }

  Frame.prototype._firstExtraBowl = function() {
    this.frameScore.roll3 = this.roll.pinsDownOnRoll(this.frameNumber, 3);
    this.frameScore.frameTotal += this.frameScore.roll3;
  }

  Frame.prototype._secondExtraBowl = function() {
    this.frameScore.roll4 = this.roll.pinsDownOnRoll(this.frameNumber, 4);
    this.frameScore.frameTotal += this.frameScore.roll4;
  }

};