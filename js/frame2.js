var Frame = function() {

  this.rollTracker = {frameNumber: 1, rollNumber: 1, maxRollScore: 10};
  this.frameScore = {};
  this.rollScore = 0;

  Frame.prototype.updateRollScore = function(userRollScore) {
    this.rollScore = parseInt(userRollScore);
  }

  Frame.prototype.updateFrameWithScore = function() {
    this.frameScore["roll" + this.rollTracker.rollNumber] = this._getRollScore();
  }

  Frame.prototype.advanceRoll = function() {
    console.log(this.rollTracker.rollNumber);
    console.log(this.frameScore.roll1);
    if (this.rollTracker.rollNumber === 1 && this.frameScore.roll1 <10) {
      this.rollTracker.rollNumber += 1;
      this.frameScore.frameTotal += this.rollTracker.roll1;
      this.rollTracker.maxRollScore -= this.rollTracker.roll1;
    }
    else if (this.rollTracker.frameNumber === 10) {
      // do something related to final frame
    }
    else {
      this.frameScore.frameTotal += this.frameScore["roll" + this.rollTracker.rollNumber];
      this.rollTracker.frameNumber += 1;
      this.rollTracker.rollNumber = 1;
      this.rollTracker.maxRollScore = 10;
    }
    console.log(this.rollTracker);
  }

  Frame.prototype._getRollScore = function() {
    return this.rollScore;
  }

  Frame.prototype._resetFrameScore = function() {
    this.frameScore.frameTotal = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  }

  Frame.prototype._resetRollTracker = function() {
    this.rollTracker = {frameNumber: 1, rollNumber: 1, maxRollScore: 10};
  }



};