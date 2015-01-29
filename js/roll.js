var Roll = function() {

  Roll.prototype.pinsDownOnRoll = function(frameNumber, rollNumber) {
    return parseInt(this.capturePinsDown(frameNumber, rollNumber));
  };

  Roll.prototype.capturePinsDown = function(frameNumber, rollNumber) {
    return prompt("Frame: " + frameNumber + " How many pins were knocked down on roll " + rollNumber +"?");  
  };

};