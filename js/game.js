var Game = function() {

this.roll = new Roll();
this.frame = new Frame();
this.score = new Score();

this.scoreBoard = "hello world";

  Game.prototype.runFrames = function() {
    var self = this;
    for (var frameNumber = 1; frameNumber <= 10; frameNumber ++) {
      self.populateScore(self.roll);
    }
  };

  Game.prototype.populateScore = function(roll) {
    this._putFrameScoreInScoreBoard(roll);
    this.score.refreshCumulativeScores();
    this.populateScoreBoard();
  };

  Game.prototype._putFrameScoreInScoreBoard = function(roll) {
    this.score.board.push(this.frame.getFrameScore(roll));  
  }

  Game.prototype.populateScoreBoard = function() {
    arrayVariables = ["roll1", "roll2", "roll3", "roll4", "cumulativeTotal"];
    this.scoreBoard = "<tr><td>Frame</td><td>Roll 1</td><td>Roll 2</td><td>Bonus 1</td><td>Bonus 2</td><td>Total</td></tr>";
    for (var i = 0; i < 10; i++) {
      this.scoreBoard += "<tr><td>" + (i + 1) + "</td>";
        for (var x = 0; x < arrayVariables.length; x++) {
          this.scoreBoard+= "<td>" + this.score.getScore(i,arrayVariables[x]) + "</td>";
        } 
        this.scoreBoard += "</tr>";
    }
  }

};