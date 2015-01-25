describe("a roll", function() {

    var roll;

  it("asks the player how many pins were knocked down", function() {
    roll = new Roll();
    spyOn(roll, 'capturePinsDown').and.returnValue('7');
    expect(roll.pinsDownOnRoll(1)).toEqual(7);
  });

});

describe("a frame", function() {

  var frame;
  var roll;

  it("should capture the score from two rolls if the total is less than 10", function() {
    frame = new Frame();
    roll = new Roll();
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(4);
    frame.captureRollScore(roll);
    expect(frame.frameScore.total).toEqual(8);
    expect(frame.frameScore.roll1).toEqual(4);
    expect(frame.frameScore.roll2).toEqual(4);
  });

  it("should capture the score from only one roll if the score on the first roll is 10", function() {
    frame = new Frame();
    roll = new Roll();
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(10);
    frame.captureRollScore(roll);
    expect(frame.frameScore.total).toEqual(10);
    expect(frame.frameScore.roll1).toEqual(10);
    expect(frame.frameScore.roll2).toEqual(0);    
  });


});

describe("a game", function() {



});
