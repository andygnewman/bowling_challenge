var Scoreboard = function() {

  this.board = []; 

  Scoreboard.prototype.addBowlToScoreBoard = function(bowlScore, frame, roll) {
    frameIndex = frame - 1;
    this.createFrameObjectIfNewFrame(frameIndex);
    frameObject = this.board[frameIndex];
    rollProperty = "roll" + roll;
    frameObject[rollProperty] = bowlScore;
    frameObject["frameTotal"] += bowlScore;
  }

  Scoreboard.prototype.createFrameObjectIfNewFrame = function(frameIndex) {
    if (typeof this.board[frameIndex] === "undefined") {
      this.board[frameIndex] = {};
      this.board[frameIndex].frameTotal = 0;
    }
  }


};