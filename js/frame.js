var Frame = function() {

  this.frameScore = {};
  // roll = new Roll();

  Frame.prototype.captureRollScore = function(roll) {
    this.resetFrameScore();
    rollNumber = 1;
    do {
    // for (var rollNumber = 1; rollNumber < 3; rollNumber++) {
      pinsDowned = roll.pinsDownOnRoll(rollNumber);
      if (rollNumber === 1) {
        this.frameScore.roll1 = pinsDowned;
        this.frameScore.total = pinsDowned;
      }
      else {
        this.frameScore.roll2 = pinsDowned;
        this.frameScore.total += pinsDowned;
      }
      rollNumber += 1
    } while (this.frameScore.total < 10 && rollNumber < 3);
  };

  Frame.prototype.resetFrameScore = function() {
    this.frameScore.total = 0;
    this.frameScore.roll1 = 0;
    this.frameScore.roll2 = 0;
  };

};