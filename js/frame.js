var Frame = function() {

  this.rollTracker = {frameNumber: 1, rollNumber: 1, maxRollScore: 10};
  this.frameScore = {};
  this.rollScore = 0;
  this.gameOver = false;
  this.newFrame = true;

  Frame.prototype.updateRollScore = function(userRollScore) {
    this.rollScore = parseInt(userRollScore);
  }

  Frame.prototype.updateFrameWithScoreAndAdvanceRoll = function() {
    this._updateFrameWithScore();
    this._advanceRoll();
  }

  Frame.prototype.passFrameScore = function() {
    var clone = {};
    var self = this;
    for (var key in self.frameScore) {
      if (self.frameScore.hasOwnProperty(key)) {
        clone[key] = self.frameScore[key];
      }
    }
    return clone;    
  }

  Frame.prototype._updateFrameWithScore = function() {
    if (this.rollTracker.rollNumber === 1) {
      this._resetFrameScore();
    }
    this.frameScore["roll" + this.rollTracker.rollNumber] = this._getRollScore();
    this.frameScore.frameTotal += this._getRollScore();
  }

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.frameTotal = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
    this.frameNew = true;
  }

  Frame.prototype._advanceRoll = function() {
    if (this.rollTracker.frameNumber === 10) {
      this._tenthFrame();
    }
    else {
      if (this.rollTracker.rollNumber === 1 && this.frameScore.roll1 < 10) {
        this._normalFrameRoll1NotStrike();
      }
      else {
        this._normalFrameRoll2OrRoll1Strike();
      }
    }
  }

  Frame.prototype._getRollScore = function() {
    return this.rollScore;
  }

  Frame.prototype._tenthFrame = function() {
    if (this.rollTracker.rollNumber === 1) {
      this._tenthFrameRoll1();
    }
    else if (this.rollTracker.rollNumber === 2) {
      this._tenthFrameRoll2();
    }
    else {
      this.gameOver = true;
    }    
  }

  Frame.prototype._tenthFrameRoll1 = function() {
    this.rollTracker.rollNumber += 1;
    if (this.frameScore.roll1 <10) {
      this.rollTracker.maxRollScore -= this.frameScore.roll1;
    }
    else {
      this.rollTracker.maxRollScore = 10;
    }    
  }

  Frame.prototype._tenthFrameRoll2 = function() {
    this.frameNew = false;
    if (this.frameScore.frameTotal < 10) {
      this.gameOver = true;
    }
    else {
      this.rollTracker.rollNumber += 1;
    }    
  }

  Frame.prototype._normalFrameRoll1NotStrike = function() {
    this.rollTracker.rollNumber += 1;
    this.rollTracker.maxRollScore -= this.frameScore.roll1;    
  }

  Frame.prototype._normalFrameRoll2OrRoll1Strike = function() {
    if (this.rollTracker.rollNumber !== 1) {
      this.frameNew = false;
    }   
    this.rollTracker.frameNumber += 1;
    this.rollTracker.rollNumber = 1;
    this.rollTracker.maxRollScore = 10;
  }

};