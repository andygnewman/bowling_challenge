var Game = function() {

this.frame = new Frame();
this.score = new Score();

  Game.prototype.populateScore = function() {

    this._putFrameScoreInScoreBoard();
    this.score.refreshCumulativeScores();
    this.populateScoreBoard();
  };

  Game.prototype._putFrameScoreInScoreBoard = function() {
    if (this.frame.frameNew) {
      this.score.board.push(this.frame.passFrameScore()); 
    }
    else {
      if (this.score.board.length === 0) {
        this.score.board[this.score.board.length] = this.frame.passFrameScore();
      }
      else {
        this.score.board[this.score.board.length - 1] = this.frame.passFrameScore();
      }
    }
  }

  Game.prototype.populateScoreBoard = function() {
    arrayVariables = ["roll1", "roll2", "roll3", "cumulativeTotal"];
    this.scoreBoard = "<tr><td>Frame</td><td>Ball 1</td><td>Ball 2</td><td></td><td>Total</td></tr>";
    for (var i = 0; i < 10; i++) {
      this.scoreBoard += "<tr><td>" + (i + 1) + "</td>";
        for (var x = 0; x < arrayVariables.length; x++) {
          this.scoreBoard+= "<td>" + this.score.getScore(i,arrayVariables[x]) + "</td>";
        } 
        this.scoreBoard += "</tr>";
    }
  }

  Game.prototype.populateMaxScoreDropDown = function() {
    this.maxScoreDropDown = "";
    for (var i = 0; i <= this.frame.rollTracker.maxRollScore; i++) {
      this.maxScoreDropDown += "<option value=" + i + ">" + i + "</option>";
    } 
  }

};