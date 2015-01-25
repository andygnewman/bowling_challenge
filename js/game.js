var Game = function() {

  this.scoreBoard = [];

  Game.prototype.roll = function(frameNumber, rollNumber, pinsDowned) {
    if (rollNumber === 1){
      this._addRoll1Score(frameNumber, pinsDowned);
    }
    else {
      this._addRoll2Score(frameNumber, pinsDowned);
    }
  };

  Game.prototype.bowlFrame = function(frameNumber) {
  for (var i = 1; i < 3; i++) {
      pinsDowned = parseInt(prompt("How many pins were downed on roll " + i +"?"));
      console.log(frameNumber, i, pinsDowned);
      this.roll(frameNumber, i, pinsDowned);
    }
  };

  Game.prototype._addRoll1Score = function(frameNumber, pinsDowned) {
    this.scoreBoard[frameNumber-1] = {};
    this.scoreBoard[frameNumber-1].roll1 = pinsDowned;
    this.scoreBoard[frameNumber-1].totalScore = pinsDowned;    
  };

  Game.prototype._addRoll2Score = function(frameNumber, pinsDowned) {
    this.scoreBoard[frameNumber - 1].roll2 = pinsDowned;
    this.scoreBoard[frameNumber - 1].totalScore += pinsDowned;    
  };

};