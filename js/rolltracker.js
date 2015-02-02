var RollTracker = function() {

  this.tracker = {frameNumber: 1, rollNumber: 1, maxRollScore: 10};
  this.gameOver = false;

  RollTracker.prototype.advanceRoll = function(bowlScore) {
    if (this.tracker.frameNumber === 10) {
      this._tenthFrame(bowlScore);
    }
    else {
      if (this.tracker.rollNumber === 1 && bowlScore < 10) {
        this._normalFrameRoll1NotStrike(bowlScore);
      }
      else {
        this._normalFrameRoll2OrRoll1Strike();
      }
    }
  }

  RollTracker.prototype._tenthFrame = function(bowlScore) {
    if (this.tracker.rollNumber === 1) {
      this._tenthFrameRoll1(bowlScore);
    }
    else if (this.tracker.rollNumber === 2) {
      this._tenthFrameRoll2(bowlScore);
    }
    else {
      this.gameOver = true;
    }    
  }

  RollTracker.prototype._tenthFrameRoll1 = function(bowlScore) {
    this.tracker.rollNumber += 1;
    if (bowlScore <10) {
      this.tracker.maxRollScore -= this.frameScore.roll1;
    }
    else {
      this.tracker.maxRollScore = 10;
    }    
  }

  RollTracker.prototype._tenthFrameRoll2 = function(bowlScore) {
    if (bowlScore === this.tracker.maxRollScore) {
      this.tracker.rollNumber += 1;
      this.tracker.maxRollScore = 10;      
    }
    else {
      this.gameOver = true;
    }    
  }

  RollTracker.prototype._normalFrameRoll1NotStrike = function(bowlScore) {
    this.tracker.rollNumber += 1;
    this.tracker.maxRollScore -= bowlScore;    
  }

  RollTracker.prototype._normalFrameRoll2OrRoll1Strike = function() {
    this.tracker.frameNumber += 1;
    this.tracker.rollNumber = 1;
    this.tracker.maxRollScore = 10;
  }

};