var Frame = function() {

  this.frameScore = {};
  this.framesBowled = 0;

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
    rollNumber = 1;
    do {
      this._standardFrameRoutine(roll, rollNumber);
      rollNumber += 1;
    } while (this.frameScore.frameTotal < 10 && rollNumber < 3);
    this.framesBowled += 1;
    if (this.framesBowled === 10) {
      this._extraBowlsRoutine(roll);
    }
    return this.frameScore;
  };

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.frameTotal = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  }

  Frame.prototype._standardFrameRoutine = function(roll, rollNumber) {
    pinsDowned = roll.pinsDownOnRoll(rollNumber);
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

  Frame.prototype._extraBowlsRoutine = function(roll) {
    if (this.frameScore.frameTotal === 10) {
      this._firstExtraBowl(roll);
    }
    if (this.frameScore.roll1 === 10) {
      this._secondExtraBowl(roll);
    }    
  }

  Frame.prototype._firstExtraBowl = function(roll) {
    this.frameScore.roll3 = roll.pinsDownOnRoll(3);
    this.frameScore.frameTotal += this.frameScore.roll3;
  }

  Frame.prototype._secondExtraBowl = function(roll) {
    this.frameScore.roll4 = roll.pinsDownOnRoll(4);
    this.frameScore.frameTotal += this.frameScore.roll4;
  }

};