var Roll = function() {

  Roll.prototype.pinsDownOnRoll = function(rollNumber) {
    return parseInt(this.capturePinsDown(rollNumber));
  };

  Roll.prototype.capturePinsDown = function(rollNumber, error) {
    return prompt("How many pins were knocked down on roll " + rollNumber +"?");  
  };

};